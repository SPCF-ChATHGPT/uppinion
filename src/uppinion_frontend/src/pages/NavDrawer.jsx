import {
  Box,
  Typography,
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  TextField,
  IconButton,
} from "@mui/material";
import { useState, useContext } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import colors from "../utils/colors";
import uppinionLogo from "../assets/uppinion.png";
import DrawerItems from "../components/navigationDrawer/DrawerItems";
import { UserContext } from "../providers/UserProvider";

const drawerButtons = [
  {
    name: "Join a community",
    icon: <GroupOutlinedIcon sx={{ color: colors.primary }} />,
    path: "/communities",
  },
  {
    name: "Saved events",
    icon: <BookmarkBorderIcon sx={{ color: colors.primary }} />,
    path: "/saved-events",
  },
];

const joinedCommunities = [
  {
    name: "Information and Communications Technology Development Unit",
    image: "/assets/spcf-ictdu.jpg",
  },
  {
    name: "College of Computing and Information Sciences",
    image: "/assets/spcf-ccis.jpg",
  },
  {
    name: "SPCF CCIS Student Council",
    image: "/assets/spcf-ccis-council.png",
  },
];

const drawerWidth = 300;

export default function NavDrawer({ children }) {
  const currentUser = useContext(UserContext);
  const [drawer, setDrawer] = useState(false);

  const handleSetDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        variant="outlined"
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar disableGutters sx={{ px: "1rem" }}>
          <IconButton
            onClick={() => handleSetDrawer()}
            sx={{ mr: "0.5rem", display: { md: "none" } }}
          >
            <FontAwesomeIcon
              icon={faBars}
              size="sm"
              style={{ color: colors.primary }}
            />
          </IconButton>
          <img
            className="mr-2 ml-1"
            src={uppinionLogo}
            alt="logo"
            style={{ width: "40px", height: "40px" }}
          />
          <Typography
            color={"white"}
            variant="body1"
            noWrap
            component="div"
            sx={{ fontWeight: "bold", display: { xs: "none", md: "flex" } }}
          >
            UP<span style={{ color: colors.primary }}>PINION</span>
          </Typography>
          <TextField
            sx={{ ml: "auto" }}
            id="search-bar"
            size="small"
            label="Search"
            variant="outlined"
          ></TextField>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={drawer}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: { xs: "none", md: "flex" },
        }}
      >
        <Toolbar />
        <DrawerItems
          userDetails={currentUser}
          drawerButtons={drawerButtons}
          joinedCommunities={joinedCommunities}
        />
      </Drawer>

      <Drawer
        variant="temporary"
        open={drawer}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: { xs: "flex", md: "none" },
        }}
      >
        <Toolbar />
        <DrawerItems
          userDetails={currentUser}
          drawerButtons={drawerButtons}
          joinedCommunities={joinedCommunities}
        />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
