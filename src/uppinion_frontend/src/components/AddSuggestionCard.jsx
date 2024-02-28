import {
  Box,
  Avatar,
  TextField,
  Button,
  Card,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";

import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import NewSuggestionDialog from "./dialogs/NewSuggestionDialog";
import colors from "../utils/colors";
import { useIsAdmin } from "../hooks/communities/useIsAdmin";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import { useEventStatus } from "../hooks/communities/useEventStatus";

function AddSuggestionCard({ eventStatus }) {
  const currentUser = useContext(UserContext);
  const { communityId, eventId } = useParams();
  const { isAdmin, loading } = useIsAdmin(communityId, currentUser?.userId);

  const navigate = useNavigate();

  const updateEventStatus = (action) => {
    const { error } = useEventStatus(eventId, action);

    if (error) return;

    navigate(`/community-details/${communityId}`);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NewSuggestionDialog open={open} handleClose={handleClose} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "start",
          gap: "0.75rem",
          mx: { xs: 0, lg: "4rem" },
          mt: "1rem",
          p: "1rem",
        }}
      >
        <Card
          elevation={0}
          variant="outlined"
          sx={{
            display: "flex",
            p: "1rem",
            borderRadius: 3,
            alignItems: "start",
            gap: "1rem",
            width: { xs: "100%", sm: "70%" },
          }}
        >
          <Avatar />
          <Card
            variant="outlined"
            sx={{
              width: "100%",
              py: "0.5rem",
              px: "1rem",
              borderRadius: 10,
              bgcolor: colors.background,
              border: "none",
            }}
            onClick={handleClickOpen}
          >
            <Typography>Make a suggestion...</Typography>
          </Card>
        </Card>
        <Card
          elevation={0}
          variant="outlined"
          sx={{
            width: { xs: "100%", sm: "30%" },
            p: "1rem",
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
          }}
        >
          {isAdmin ? (
            <Button
              variant="contained"
              color="violet"
              fullWidth
              startIcon={<CheckCircleOutlineOutlinedIcon />}
              onClick={
                eventStatus === "OPEN"
                  ? () => updateEventStatus("close")
                  : () => updateEventStatus("open")
              }
            >
              {eventStatus === "OPEN" ? "CLOSE SUGGESTING" : "OPEN SUGGESTING"}
            </Button>
          ) : (
            <Button
              variant="contained"
              color="violet"
              fullWidth
              startIcon={<CheckCircleOutlineOutlinedIcon />}
            >
              Will Attend
            </Button>
          )}
        </Card>
      </Box>
    </>
  );
}

export default AddSuggestionCard;
