import {
  List,
  ListItem,
  ListItemButton,
  Avatar,
  Skeleton,
} from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "../../components/Loading";
import { UserContext } from "../../providers/UserProvider";
import { useMyCommunities } from "../../hooks/communities/useMyCommunities";

export default function MyCommunityList({}) {
  const currentUser = useContext(UserContext);
  const { communities, loading } = useMyCommunities(currentUser?.userId);
  const navigate = useNavigate();

  const redirect = (communityId) => {
    navigate(`/community-details/${communityId}`);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <p className="text-sm px-[1rem]">MY COMMUNITIES</p>
      <List>
        {communities.map((community, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{ gap: "1rem" }}
              onClick={() => redirect(community.communityId)}
            >
              {community ? (
                <Avatar
                  sx={{ border: "1px solid #DDDDDD" }}
                  aria-label="profile"
                  src={community.image}
                  alt="avatar"
                />
              ) : (
                <Skeleton variant="circular" width={40} height={40} />
              )}
              <p className="text-sm line-clamp-2">{community.name}</p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
