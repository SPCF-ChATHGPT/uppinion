import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import CommunityHeader from "../../components/CommunityHeader";
import EventCard from "../../components/EventCard";
import { useCommunity } from "../../hooks/communities/useCommunity";
import { UserContext } from "../../providers/UserProvider";

export default function CommunityDetailsPage({}) {
  const currentUser = useContext(UserContext);
  const [allEvents, setAllEvents] = useState([]);
  const { communityId } = useParams();
  const { community, events, loading } = useCommunity(
    communityId,
    currentUser?.userId
  );

  useEffect(() => {
    setAllEvents(events);
  }, [events]);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      <CommunityHeader
        isAdmin={community.isAdmin ? true : false}
        name={community.name}
        image={community.image}
        memberCount={community.memberCount}
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
        {allEvents &&
          allEvents.map((item) => (
            <EventCard
              key={Math.random()}
              name={item.name}
              status={item.status}
              date={item.date}
              image={item.image}
              description={item.description}
            />
          ))}
      </Box>
    </>
  );
}
