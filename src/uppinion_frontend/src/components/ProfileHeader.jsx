import { Box, Avatar, Typography, Divider, Button } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

import colors from "../utils/colors";
import { UserContext } from "../providers/UserProvider";

export default function ProfileHeader({ name, email, image }) {
  const currentUser = useContext(UserContext);
  const navigate = useNavigate();

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const headerButtons = [
    {
      name: "Edit Name",
      icon: <AccountCircleOutlinedIcon sx={{ color: "white" }} />,
      func: () => console.log("Edit Name"),
    },
    {
      name: "Edit Password",
      icon: <LockOpenOutlinedIcon sx={{ color: "white" }} />,
      func: () => console.log("Edit Password"),
    },
    {
      name: "Log out",
      icon: <LogoutOutlinedIcon sx={{ color: "white" }} />,
      func: signOutUser,
    },
  ];

  const otherButtons = [
    {
      name: "Send a Message",
      icon: <MailOutlineIcon sx={{ color: "white" }} />,
      func: () => console.log("Send a Message"),
    },
  ];

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
          <Typography variant="subtitle2">{email}</Typography>
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
        {headerButtons && currentUser?.name === name
          ? headerButtons.map((btn) => (
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
            ))
          : otherButtons.map((btn) => (
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
      </Box>
    </Box>
  );
}
