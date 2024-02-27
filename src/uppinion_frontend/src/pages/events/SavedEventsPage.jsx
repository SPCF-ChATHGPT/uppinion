import EventCard from "../../components/EventCard";
import { Box } from "@mui/material";
import LabeledDivider from "../../components/LabeledDivider";

export default function SavedEventsPage({}) {
  const eventDetails = {
    eventId: "odZ9FPMRsE3avLs4zygJ",
    name: "ICP BlockChain Hackathon",
    status: "Open",
    date: "February 10, 2024",
    image: "assets/icp-poster.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quam, incidunt velit sequi consequuntur explicabo ea officiis accusantium a veniam blanditiis necessitatibus? Quae, beatae similique nihil iste id qui consequatur?",
  };

  return (
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
      <LabeledDivider label="Saved Events" />
      <EventCard
        name={eventDetails.name}
        status={eventDetails.status}
        date={eventDetails.date}
        image={eventDetails.image}
        description={eventDetails.description}
      />

      <EventCard
        name={eventDetails.name}
        status={eventDetails.status}
        date={eventDetails.date}
        image={eventDetails.image}
        description={eventDetails.description}
      />

      <EventCard
        name={eventDetails.name}
        status={eventDetails.status}
        date={eventDetails.date}
        image={eventDetails.image}
        description={eventDetails.description}
      />
    </Box>
  );
}
