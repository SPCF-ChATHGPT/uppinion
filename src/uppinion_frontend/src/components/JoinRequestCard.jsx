import {
  Card,
  Skeleton,
  Avatar,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

import colors from "../utils/colors";
import { useJoinRequestStatus } from "../hooks/communities/useJoinRequestStatus";

export default function JoinRequestCard({ request, handleUpdateRequestCards }) {
  const { communityId } = useParams();
  const [error, setError] = useState(null);

  const updateJoinRequest = (action) => {
    let { error: updateError } = useJoinRequestStatus(
      communityId,
      action,
      request.userId
    );

    if (updateError) {
      return setError(updateError);
    }

    return handleUpdateRequestCards(request.userId);
  };

  return (
    <Card elevation={0}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: null, sm: "center" },
          justifyContent: { xs: null, sm: "space-between" },
          px: { xs: "0rem", lg: "1rem" },
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          {request.profile_image ? (
            <Avatar
              sx={{ width: 40, height: 40, border: "1px solid #DDDDDD" }}
              src={request.profile_image}
              alt="avatar"
            />
          ) : (
            <Skeleton variant="circular" width={40} height={40} />
          )}

          <Box>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {request.name}
            </Typography>
          </Box>
        </Box>
        <CardActions>
          <Button
            size="small"
            variant="text"
            onClick={() => updateJoinRequest("reject")}
            sx={{ ml: "auto", fontWeight: "bold", color: colors.error }}
          >
            Reject
          </Button>
          <Button
            size="small"
            variant="contained"
            color="violet"
            onClick={() => updateJoinRequest("accept")}
            sx={{ ml: "auto", fontWeight: "bold" }}
          >
            Accept
          </Button>
        </CardActions>
      </CardContent>
      <Divider />
    </Card>
  );
}
