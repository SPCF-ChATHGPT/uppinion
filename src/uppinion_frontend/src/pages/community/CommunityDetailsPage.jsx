import { Box } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import CommunityHeader from "../../components/CommunityHeader";
import EventCard from "../../components/EventCard";
import { useCommunity } from "../../hooks/communities/useCommunity";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CommunityDetailsPage({}) {
  const [allEvents, setAllEvents] = useState([]);
  const { communityId } = useParams();
  const { community, events, loading } = useCommunity(communityId);
  // const { community, events } = useCommunity("20L1tAZaMrGmrYORAp1x");

  useEffect(() => {
    setAllEvents(events);
  }, [events]);

  const headerButtons = [
    {
      name: "Edit Details",
      icon: <EditOutlinedIcon sx={{ color: "white" }} />,
    },
    {
      name: "Join Requests",
      icon: <AddCircleOutlineOutlinedIcon sx={{ color: "white" }} />,
    },
    {
      name: "Add Event",
      icon: <CalendarTodayOutlinedIcon sx={{ color: "white" }} />,
    },
  ];

  console.log(community);
  console.log(events);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      <CommunityHeader
        headerButtons={headerButtons}
        name={community.name}
        image={community.image}
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
