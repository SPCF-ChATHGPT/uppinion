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

const taskButtons = [
  {
    name: "All tasks",
    count: 47,
    path: "/all-tasks",
  },
  {
    name: "Ongoing",
    count: 10,
    path: "/",
  },
  {
    name: "Completed",
    count: 34,
    path: "/completed",
  },
  {
    name: "Backlogs",
    count: 3,
    path: "/backlogs",
  },
];

const projects = [
  {
    title: "School Management System",
    code: "sms",
    author: "edseeran",
  },
  {
    title: "CAPT.ED: Task Management System",
    code: "capt-ed",
    author: "pcharles",
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
        subheader={<p className="text-xs">pcharles</p>}
        disableTypography
        sx={{
          flexDirection: "row",
          alignItems: "start",
        }}
      />
    </Card>
  );
}

function TaskList() {
  return (
    <>
      <Card
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.25rem 0 0.25rem 1rem",
          mt: "0.5rem",
          backgroundColor: colors.navBackground,
        }}
      >
        <p className="text-sm font-bold">TASKS</p>
        <CardActions>
          <IconButton size="small">
            <FontAwesomeIcon
              icon={faPlus}
              size="xs"
              className="p-2 rounded-md"
              style={{ color: "white", backgroundColor: colors.primary }}
            />
          </IconButton>
        </CardActions>
      </Card>
      <List>
        {taskButtons.map((task, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ p: "0", mb: "0.25rem" }}>
              <NavLink
                to={task.path}
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "white" : "black",
                    backgroundColor: isActive
                      ? colors[task.name.toLowerCase()]
                      : "",
                  };
                }}
                className="w-full px-4 py-3 rounded-sm flex justify-between"
              >
                <p className="text-sm">{task.name}</p>
                <p className="text-sm">{task.count}</p>
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

function ProjectList() {
  return (
    <>
      <Card
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.25rem 0 0.25rem 1rem",
          mt: "0.5rem",
          backgroundColor: colors.navBackground,
        }}
      >
        <p className="text-sm font-bold">PROJECTS</p>
        <CardActions>
          <IconButton size="small">
            <FontAwesomeIcon
              icon={faPlus}
              size="xs"
              className="p-2 rounded-md"
              style={{ color: "white", backgroundColor: colors.primary }}
            />
          </IconButton>
        </CardActions>
      </Card>
      <List>
        {projects.map((project, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText>
                <p className="text-xs mb-1 line-clamp-1 font-bold">
                  {project.title}
                </p>
                <p className="text-xs">Project code: {project.code}</p>
                <p className="text-xs">Author: {project.author}</p>
              </ListItemText>
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
      <TaskList />
      <Divider sx={{ mb: "1rem", mt: "0.25rem" }} />
      <ProjectList />
    </Box>
  );
}

const drawerWidth = 300;

export default function NavigationDrawer({ children }) {
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
          <IconButton onClick={() => handleSetDrawer()} sx={{ mr: "0.5rem" }}>
            <FontAwesomeIcon
              icon={faBars}
              size="sm"
              style={{ color: colors.primary }}
            />
          </IconButton>
          <Typography color={"black"} variant="body1" noWrap component="div">
            CAPT.ED
          </Typography>
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
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
