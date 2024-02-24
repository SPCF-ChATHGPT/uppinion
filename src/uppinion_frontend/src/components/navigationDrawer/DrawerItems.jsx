import ProfileCard from "./ProfileCard";
import DrawerButtons from "./DrawerButtons";
import MyCommunityList from "./MyCommunityList";
import JoinedCommunityList from "./JoinedCommunityList";
import { Box, Divider } from "@mui/material";

export default function DrawerItems({
  myCommunities,
  joinedCommunities,
  drawerButtons,
}) {
  return (
    <Box sx={{ padding: "0.5rem", overflow: "auto" }} role="presentation">
      <ProfileCard />
      <Divider />
      <DrawerButtons buttons={drawerButtons} />
      <Divider sx={{ mb: "1rem" }} />
      <MyCommunityList communities={myCommunities} />
      <Divider sx={{ mb: "1rem", mt: "0.25rem" }} />
      <JoinedCommunityList communities={joinedCommunities} />
    </Box>
  );
}
