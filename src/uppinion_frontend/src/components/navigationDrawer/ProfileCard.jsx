import {
  Card,
  CardHeader,
  Avatar,
  Skeleton,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../../providers/UserProvider";
import colors from "../../utils/colors";

export default function ProfileCard({}) {
  const currentUser = useContext(UserContext);
  const profilePagePath = `/profile/${currentUser?.userId}`;

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
          <>
            {currentUser ? (
              currentUser?.profile_image ? (
                <Avatar
                  aria-label="profile"
                  src={currentUser?.profile_image}
                  alt="avatar"
                />
              ) : (
                <Avatar />
              )
            ) : (
              <Skeleton variant="circular" width={40} height={40} />
            )}
          </>
        }
        title={
          <ListItem disablePadding>
            <ListItemButton sx={{ p: 0 }}>
              <NavLink to={profilePagePath}>
                <p className="font-bold">{currentUser?.name}</p>
              </NavLink>
            </ListItemButton>
          </ListItem>
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
