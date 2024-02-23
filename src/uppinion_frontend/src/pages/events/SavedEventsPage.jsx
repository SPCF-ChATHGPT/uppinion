import EventCard from "../../components/EventCard";
import { Box } from "@mui/material";
import LabeledDivider from "../../components/LabeledDivider";

export default function SavedEventsPage({}) {
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
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </Box>
  );
}
