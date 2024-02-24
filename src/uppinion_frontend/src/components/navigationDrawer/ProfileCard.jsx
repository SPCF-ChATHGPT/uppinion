import { Card, CardHeader, Avatar, Skeleton } from "@mui/material";
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { useContext, useState, useEffect } from "react";

import { UserContext } from "../../providers/UserProvider";
import colors from "../../utils/colors";

export default function ProfileCard({ }) {
  const currentUser = useContext(UserContext);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    //Gets the profile image of the user
    if (currentUser && currentUser.profile_image) {
      const storage = getStorage();
      getDownloadURL(
        ref(
          storage,
          `gs://uppinion-dev.appspot.com/${currentUser?.profile_image}`
        )
      )
        .then((url) => {
          setProfileImage(url);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currentUser]);

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
            {profileImage ? (
              <Avatar aria-label="profile">
                <img src={profileImage} alt="avatar" />
              </Avatar>
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
