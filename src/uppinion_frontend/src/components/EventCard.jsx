import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const eventDetails = {
  name: "ICP BlockChain Hackthon",
  status: "Open",
  date: "February 10, 2024",
  image: "assets/icp-poster.jpg",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quam, incidunt velit sequi consequuntur explicabo ea officiis accusantium a veniam blanditiis necessitatibus? Quae, beatae similique nihil iste id qui consequatur?",
};

export default function EventCard({}) {
  return (
    <Card elevation={0} variant="outlined" sx={{ borderRadius: 3 }}>
      <Card
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "200px",
          overflow: "hidden",
          borderRadius: 0,
        }}
      >
        <img src={eventDetails.image} alt="poster" className="eventBanner" />
      </Card>
      <CardContent sx={{position: "relative"}}>
        <IconButton color="violet" sx={{position: "absolute", top: "0.5rem", right: "0.5rem"}}>
          <BookmarkBorderIcon />
        </IconButton>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {eventDetails.name}
        </Typography>
        <Typography variant="body2">
          <span
            className="font-bold"
            style={{
              color:
                eventDetails.status.toLowerCase() === "open" ? "green" : "red",
            }}
          >
            {eventDetails.status.toUpperCase()}
          </span>{" "}
          | {eventDetails.date}
        </Typography>
        <Typography sx={{ my: "1rem" }}>{eventDetails.description}</Typography>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          px: "1rem",
          width: "100%",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button
          size="small"
          color="violet"
          variant="text"
          sx={{ fontWeight: "bold" }}
        >
          Event Details
        </Button>
      </CardActions>
    </Card>
  );
}
