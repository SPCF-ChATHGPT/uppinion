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

import colors from "../utils/colors";
import { useNavigate } from "react-router-dom";
import { useJoinRequest } from "../hooks/communities/useJoinRequest";

function CommunityButton({ joinRequest, communityId, userId, isMember }) {
  const [isRequested, setIsRequested] = useState(joinRequest);
  const [loading, setLoading] = useState(false);

  const updateJoinRequests = async (action) => {
    setLoading(true);
    const { error } = await useJoinRequest(communityId, action, userId);

    if (!error) {
      switch (action) {
        case "add":
          setIsRequested(true);
          break;

        case "delete":
          setIsRequested(false);
          break;

        default:
          break;
      }
    }
    setLoading(false);
  };

  if (isMember) return;

  return isRequested ? (
    <Button
      size="small"
      variant="text"
      onClick={() => updateJoinRequests("delete")}
      disabled={loading}
      sx={{ ml: "auto", fontWeight: "bold", color: colors.error }}
    >
      CANCEL REQUEST
    </Button>
  ) : (
    <Button
      size="small"
      variant="text"
      color="violet"
      onClick={() => updateJoinRequests("add")}
      disabled={loading}
      sx={{ ml: "auto", fontWeight: "bold" }}
    >
      REQUEST TO JOIN
    </Button>
  );
}

export default function CommunityCard({
  name,
  description,
  image,
  joinRequest,
  isMember,
  communityId,
  userId,
  memberCount
}) {
  const navigate = useNavigate();
  const viewCommunity = () => {
    navigate(`/community-details/${communityId}`);
  };

  return (
    <Card elevation={0}>
      <CardContent
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          px: { xs: "0rem", lg: "1rem" },
        }}
      >
        {image ? (
          <Avatar
            sx={{ width: 40, height: 40, border: "1px solid #DDDDDD" }}
            src={image}
            alt="avatar"
          />
        ) : (
          <Skeleton variant="circular" width={40} height={40} />
        )}

        <Box>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {name}
          </Typography>
          <Typography variant="body2">{memberCount} {memberCount > 1 ? "members" : "member"}</Typography>
        </Box>
      </CardContent>
      <CardContent sx={{ py: "0", px: { xs: "0rem", lg: "1rem" }, mb: "1rem" }}>
        <Typography>{description}</Typography>
      </CardContent>

      <CardActions sx={{ px: { xs: "0rem", lg: "1rem" }, pb: "1rem" }}>
        <CommunityButton
          joinRequest={joinRequest}
          communityId={communityId}
          isMember={isMember}
          userId={userId}
        />

        <Button
          size="small"
          variant="text"
          color="violet"
          onClick={viewCommunity}
          sx={{ ml: "auto", fontWeight: "bold" }}
        >
          DETAILS
        </Button>
      </CardActions>
      <Divider />
    </Card>
  );
}
