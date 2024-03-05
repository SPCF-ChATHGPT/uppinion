import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";

import { auth } from "../../config/firebase";
import LabeledDivider from "../../components/LabeledDivider";
import Loading from "../../components/Loading";
import ProfileHeader from "../../components/ProfileHeader";
import { useMyCommunities } from "../../hooks/communities/useMyCommunities";
import CommunityCard from "../../components/CommunityCard";
import { useUser } from "../../hooks/user/useUser";

export default function ProfilePage({}) {
  const { userId } = useParams();
  const { user } = useUser(userId);
  const { communities, error, loading } = useMyCommunities(userId);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ProfileHeader
        name={user?.name}
        email={user?.email}
        image={user?.profile_image}
      />
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          mx: { xs: "1rem", lg: "5rem" },
          my: "1rem",
        }}
      >
        <LabeledDivider label="Communities"></LabeledDivider>
        {communities &&
          communities.map((community) => (
            <CommunityCard
              key={Math.random()}
              name={community.name}
              description={community.description}
              image={community.image}
              joinRequest={community.requestedToJoin}
              isMember={community.isMember}
              communityId={community.communityId}
              userId={userId}
              memberCount={community.members.length}
            />
          ))}
      </Box>
    </>
  );
}
