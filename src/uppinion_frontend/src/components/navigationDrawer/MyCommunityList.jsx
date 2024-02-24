import { List, ListItem, ListItemButton, Avatar } from "@mui/material";

export default function MyCommunityList({communities}) {
    return (
      <>
        <p className="text-sm px-[1rem]">MY COMMUNITIES</p>
        <List>
          {communities.map((community, index) => (
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