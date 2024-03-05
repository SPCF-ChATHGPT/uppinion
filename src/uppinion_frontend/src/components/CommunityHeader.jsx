import { Box, Avatar, Typography, Divider, Button } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useJoinRequest } from "../hooks/communities/useJoinRequest";
import colors from "../utils/colors";
import { UserContext } from "../providers/UserProvider";

import NewEventDialog from "./dialogs/NewEventDialog";

export default function CommunityHeader({
  isAdmin,
  name,
  image,
  memberCount,
  description,
  joinRequest,
  isMember,
}) {
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const adminButtons = [
    {
      name: "Edit Details",
      icon: <EditOutlinedIcon sx={{ color: "white" }} />,
      func: () => console.log("Edit Details"),
    },
    {
      name: "Join Requests",
      icon: <AddCircleOutlineOutlinedIcon sx={{ color: "white" }} />,
      func: () => navigate(`/join-requests/${communityId}`),
    },
    {
      name: "Add Event",
      icon: <CalendarTodayOutlinedIcon sx={{ color: "white" }} />,
      func: handleClickOpen,
    },
  ];

  const memberButtons = [
    {
      joinRequest: "Request to Join",
      cancelRequest: "Cancel Join Request",
      icon: <AddCircleOutlineOutlinedIcon sx={{ color: "white" }} />,
    },
  ];

  const [headerButtons, setHeaderButtons] = useState(memberButtons);
  const currentUser = useContext(UserContext);
  const [isRequested, setIsRequested] = useState(joinRequest);
  const { communityId } = useParams();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  //Updates the join request status of the user.
  const updateJoinRequests = async () => {
    setLoading(true);
    let action = isRequested ? "delete" : "add";
    const { error } = await useJoinRequest(
      communityId,
      action,
      currentUser.userId
    );

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
      <NewEventDialog open={open} handleClose={handleClose} />
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
            {memberCount + Math.floor(Math.random()*1000)} {memberCount > 1 ? "members" : "member"}
          </Typography>
        </div>
      </Box>
      <Box
        component="div"
        sx={{
          px: "1rem",
          mb: "1rem",
        }}
      >
        <Typography variant="body1">{description}</Typography>
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
          isAdmin &&
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
                onClick={btn.func}
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
                onClick={btn.func}
              >
                {btn.icon}
              </Button>
            </Box>
          ))}

        {headerButtons &&
          !isAdmin &&
          !isMember &&
          headerButtons.map((btn) => (
            <Box key={Math.random()} sx={{ width: { xs: "100%" } }}>
              <Button
                sx={{
                  color: "white",
                  display: { xs: "none", sm: "flex" },
                }}
                size="small"
                variant="text"
                startIcon={btn.icon}
                onClick={updateJoinRequests}
              >
                {isRequested ? btn.cancelRequest : btn.joinRequest}
              </Button>
              <Button
                sx={{
                  color: "white",
                  display: { xs: "flex", sm: "none" },
                }}
                size="small"
                fullWidth
                onClick={updateJoinRequests}
              >
                {isRequested ? btn.cancelRequest : btn.joinRequest}
              </Button>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
