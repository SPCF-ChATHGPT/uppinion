import { Box } from "@mui/material";
import CommunityCard from "../../components/CommunityCard";
import LabeledDivider from "../../components/LabeledDivider";
import { useRef, useState, useCallback, useContext } from "react";
import { usePaginateCommunity } from "../../hooks/pagination/usePaginateCommunity";
import { UserContext } from "../../providers/UserProvider";
import Loading from "../../components/Loading";

export default function CommunitiesPage({}) {
  const currentUser = useContext(UserContext);
  const [lastVisible, setLastVisible] = useState(null);
  const { communities, error, loading } = usePaginateCommunity(
    lastVisible,
    currentUser?.userId
  );

  const observer = useRef();
  const lastCommunityElementVisibleRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setLastVisible(communities[communities.length - 1]);
        }
      });

      if (node) observer.current.observe(node);
    },
    [communities]
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        m: "1rem",
        mx: { lg: "5rem" },
      }}
    >
      <LabeledDivider label="Communities"></LabeledDivider>
      {communities &&
        communities.map((community, index) => {
          if (communities.length === index + 1) {
            return (
              <div key={Math.random()} ref={lastCommunityElementVisibleRef}>
                <CommunityCard
                  name={community.name}
                  description={community.description}
                  image={community.image}
                  joinRequest={community.requestedToJoin}
                  isMember={community.isMember}
                  communityId={community.communityId}
                  userId={currentUser.userId}
                  memberCount={community.memberCount}
                />
              </div>
            );
          } else {
            return (
              <div key={Math.random()}>
                <CommunityCard
                  name={community.name}
                  description={community.description}
                  image={community.image}
                  joinRequest={community.requestedToJoin}
                  isMember={community.isMember}
                  communityId={community.communityId}
                  userId={currentUser.userId}
                  memberCount={community.memberCount}
                />
              </div>
            );
          }
        })}
    </Box>
  );
}
