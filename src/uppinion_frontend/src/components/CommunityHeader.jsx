import { Box, Avatar, Typography, Divider, Button } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useEffect, useState } from "react";

import colors from "../utils/colors";

const adminButtons = [
  {
    name: "Edit Details",
    icon: <EditOutlinedIcon sx={{ color: "white" }} />,
  },
  {
    name: "Join Requests",
    icon: <AddCircleOutlineOutlinedIcon sx={{ color: "white" }} />,
  },
  {
    name: "Add Event",
    icon: <CalendarTodayOutlinedIcon sx={{ color: "white" }} />,
  },
];

const memberButtons = [
  {
    name: "Edit Details",
    icon: <EditOutlinedIcon sx={{ color: "white" }} />,
  },
];

export default function CommunityHeader({ isAdmin, name, image, memberCount }) {
  const [headerButtons, setHeaderButtons] = useState(memberButtons);

  useEffect(() => {
    if (isAdmin) {
      setHeaderButtons(adminButtons);
    }
  }, [isAdmin]);

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
        <Avatar sx={{ width: 75, height: 75 }} src={image} alt="avatar" />
        <div>
          <Typography
            variant="body1"
            sx={{ display: { xs: "flex", md: "none" }, fontWeight: "bold" }}
          >
            {name}
          </Typography>
          <Typography variant="h5" sx={{ display: { xs: "none", md: "flex" } }}>
            {name}
          </Typography>
          <Typography variant="subtitle2">
            {memberCount} {memberCount > 1 ? "members" : "member"}
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
        {headerButtons &&
          headerButtons.map((btn) => (
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
