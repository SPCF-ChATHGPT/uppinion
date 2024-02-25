import { Card, CardHeader, Avatar, Skeleton } from "@mui/material";
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { useContext, useState, useEffect } from "react";

import { UserContext } from "../../providers/UserProvider";
import colors from "../../utils/colors";

export default function ProfileCard({}) {
  const currentUser = useContext(UserContext);

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
              <Avatar
                aria-label="profile"
                src={encodeURI(currentUser?.profile_image)}
                alt="avatar"
              />
            ) : (
              <Skeleton variant="circular" width={40} height={40} />
            )}
          </>
        }
        title={
          <p className="text-sm font-bold line-clamp-1">{currentUser?.name}</p>
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
