import { List, ListItem, ListItemButton, Avatar } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { useMyCommunities } from "../../hooks/communities/useMyCommunities";

export default function MyCommunityList({}) {
  const currentUser = useContext(UserContext);
  const { communities, loading } = useMyCommunities(currentUser?.userId);
  console.log(communities);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      <p className="text-sm px-[1rem]">MY COMMUNITIES</p>
      <List>
        {communities.map((community, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ gap: "1rem" }}>
              <Avatar
                sx={{ border: "1px solid #DDDDDD" }}
                aria-label="profile"
                src={community.image}
                alt="avatar"
              />
              <p className="text-sm line-clamp-2">{community.name}</p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
