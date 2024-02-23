import {
  Box,
  Avatar,
  Typography,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import colors from "../utils/colors";

export default function CommunityHeader({headerButtons, community}) {
  return (
    <Box
      component="div"
      sx={{
        bgcolor: colors.primary,
        color: "white",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          p: "1rem",
        }}
      >
        <Avatar
          sx={{ width: 75, height: 75 }}
          src={community.image}
          alt="avatar"
        />
        <div>
          <Typography
            variant="body1"
            sx={{ display: { xs: "flex", md: "none" }, fontWeight: "bold" }}
          >
            {community.name}
          </Typography>
          <Typography variant="h5" sx={{ display: { xs: "none", md: "flex" } }}>
            {community.name}
          </Typography>
          <Typography variant="subtitle2">
            {community.memberCount} members
          </Typography>
        </div>
      </Box>
      <Divider sx={{ bgcolor: colors.divider.light }} />
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
          px: "1rem",
          py: "0.5rem",
        }}
      >
        {headerButtons.map((btn) => (
          <Box
            key={Math.random()}
            sx={{ width: { xs: "100%", sm: "inherit" } }}
          >
            <Button
              sx={{ color: "white", display: { xs: "none", sm: "flex" } }}
              size="small"
              variant="text"
              startIcon={btn.icon}
            >
              {btn.name}
            </Button>
            <Button
              sx={{
                color: "white",
                display: { xs: "flex", sm: "none" },
              }}
              size="small"
              fullWidth
            >
              {btn.icon}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
