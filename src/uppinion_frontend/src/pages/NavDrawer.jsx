import * as React from "react";

import {
  Box,
  Typography,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Card,
  CardHeader,
  CardActions,
  Avatar,
  AppBar,
  Toolbar,
  CssBaseline,
  TextField,
  IconButton,
} from "@mui/material";

import { NavLink } from "react-router-dom";
import colors from "../utils/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faBars, faFilter } from "@fortawesome/free-solid-svg-icons";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import topCathLogo from "../assets/topcath-logo.png";

const drawerButtons = [
  {
    name: "Join a community",
    icon: <GroupOutlinedIcon sx={{ color: colors.primary }} />,
    path: "/communities",
  },
  {
    name: "Create a community",
    icon: <EmojiEmotionsOutlinedIcon sx={{ color: colors.primary }} />,
    path: "/",
  },
  {
    name: "Saved events",
    icon: <BookmarkBorderIcon sx={{ color: colors.primary }} />,
    path: "/saved-events",
  },
];

const myCommunities = [
  {
    name: "Information and Communications Technology Development Unit",
    image: "/assets/spcf-ictdu.jpg",
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

function ProfileCard() {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: colors.navBackground,
        mb: "0.5rem",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: colors.primary }} aria-label="profile">
            PC
          </Avatar>
        }
        title={
          <p className="text-sm font-bold line-clamp-1">
            Prince Charles Clemente
          </p>
        }
        disableTypography
        sx={{
          flexDirection: "row",
          alignItems: "center",
        }}
      />
    </Card>
  );
}

function DrawerButtons() {
  return (
    <>
      <List>
        {drawerButtons.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ gap: "2rem", p: 0 }}>
              <NavLink
                to={item.path}
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? colors.primary : "black",
                    backgroundColor: isActive ? colors.navBackground : "",
                  };
                }}
                className="w-full px-4 py-3 rounded-sm flex gap-8 items-center"
              >
                {item.icon}
                <p className="text-sm">{item.name}</p>
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

function MyCommunityList() {
  return (
    <>
      <p className="text-sm px-[1rem]">MY COMMUNITIES</p>
      <List>
        {myCommunities.map((community, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ gap: "1rem" }}>
              <Avatar sx={{ bgcolor: "white" }} aria-label="profile">
                <img src={community.image} alt="avatar" />
              </Avatar>
              <p className="text-sm line-clamp-2">{community.name}</p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

function JoinedCommunityList() {
  return (
    <>
      <p className="text-sm px-[1rem]">JOINED COMMUNITIES</p>
      <List>
        {joinedCommunities.map((community, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ gap: "1rem" }}>
              <Avatar sx={{ bgcolor: "white" }} aria-label="profile">
                <img src={community.image} alt="avatar" />
              </Avatar>
              <p className="text-sm line-clamp-2">{community.name}</p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

function DrawerItems() {
  return (
    <Box sx={{ padding: "0.5rem", overflow: "auto" }} role="presentation">
      <ProfileCard />
      <Divider />
      <DrawerButtons />
      <Divider sx={{ mb: "1rem" }} />
      <MyCommunityList />
      <Divider sx={{ mb: "1rem", mt: "0.25rem" }} />
      <JoinedCommunityList />
    </Box>
  );
}

const drawerWidth = 300;

export default function NavDrawer({ children }) {
  const [drawer, setDrawer] = React.useState(false);

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
          backgroundColor: "white",
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
            src={topCathLogo}
            alt="logo"
            style={{ width: "40px", height: "40px" }}
          />
          <Typography
            color={"black"}
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
        <DrawerItems />
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
        <DrawerItems />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
