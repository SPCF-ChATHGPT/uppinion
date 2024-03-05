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

import { useNavigate } from "react-router-dom";

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
          <Typography variant="body2">{memberCount + Math.floor(Math.random()*1000)} {memberCount > 1 ? "members" : "member"}</Typography>
        </Box>
      </CardContent>
      <CardContent sx={{ py: "0", px: { xs: "0rem", lg: "1rem" }, mb: "1rem" }}>
        <Typography>{description}</Typography>
      </CardContent>

      <CardActions sx={{ px: { xs: "0rem", lg: "1rem" }, pb: "1rem" }}>
        <Button
          size="small"
          variant="text"
          color="violet"
          onClick={viewCommunity}
          sx={{ ml: "auto", fontWeight: "bold" }}
        >
          COMMUNITY DETAILS
        </Button>
      </CardActions>
      <Divider />
    </Card>
  );
}
