import EventCard from "../../components/EventCard";
import { Box } from "@mui/material";

export default function EventsPage({}) {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        mx: { lg: "5rem" },
      }}
    >
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </Box>
  );
}
