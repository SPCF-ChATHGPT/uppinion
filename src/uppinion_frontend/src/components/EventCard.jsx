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
import { useNavigate } from "react-router-dom";

export default function EventCard({
  name,
  status,
  date,
  image,
  description,
  eventId,
  communityId,
  isMember = false,
}) {
  const navigate = useNavigate();
  const redirect = () => {
    navigate(`/event-details/${communityId}/${eventId}`);
  };
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
        <img src={image} alt="poster" className="eventBanner" />
      </Card>
      <CardContent sx={{ position: "relative" }}>
        {isMember && (
          <IconButton
            color="violet"
            sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
          >
            <BookmarkBorderIcon />
          </IconButton>
        )}
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography variant="body2">
          <span
            className="font-bold"
            style={{
              color: status.toLowerCase() === "open" ? "green" : "red",
            }}
          >
            {status.toUpperCase()}
          </span>{" "}
          | {date}
        </Typography>
        <Typography sx={{ my: "1rem" }}>{description}</Typography>
      </CardContent>
      {isMember && (
        <>
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
              onClick={redirect}
              sx={{ fontWeight: "bold" }}
            >
              Event Details
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
}
