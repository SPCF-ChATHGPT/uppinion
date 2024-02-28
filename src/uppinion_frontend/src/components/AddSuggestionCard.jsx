import {
  Box,
  Avatar,
  TextField,
  Button,
  Card,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import NewSuggestionDialog from "./dialogs/NewSuggestionDialog";
import colors from "../utils/colors";

function AddSuggestionCard({}) {
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
          {/* <TextField
            multiline
            variant="standard"
            placeholder="Make a suggestion..."
            fullWidth
            onClick={handleClickOpen}
          /> */}
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
          <Button
            variant="contained"
            color="violet"
            fullWidth
            startIcon={<CheckCircleOutlineOutlinedIcon />}
          >
            Will Attend
          </Button>
        </Card>
      </Box>
    </>
  );
}

export default AddSuggestionCard;
