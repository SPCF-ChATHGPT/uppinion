import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import { useState } from "react";

const cardTagButtons = [
  {
    name: "Venue",
    variant: "contained",
    isSelected: true,
  },
  {
    name: "Theme",
    variant: "text",
    isSelected: false,
  },
  {
    name: "Program",
    variant: "text",
    isSelected: false,
  },
  {
    name: "Others",
    variant: "text",
    isSelected: false,
  },
];

export default function EventDetailsCard({
  name,
  description,
  status,
  date,
  image,
  handleSetSuggestion,
  currentType,
}) {
  const [selectedType, setSelectedType] = useState(currentType);

  return (
    <Card
      elevation={0}
      sx={{ borderBottom: "1px solid #DDDDDD", borderRadius: 0 }}
    >
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
        <img src={image} alt="poster" style={{ width: "100%" }} />
      </Card>
      <CardContent sx={{ mx: { xs: 0, lg: "4rem" } }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography variant="body2">
          <span
            className="font-bold"
            style={{
              color: status?.toLowerCase() === "open" ? "green" : "red",
            }}
          >
            {status?.toUpperCase()}
          </span>{" "}
          | {date}
        </Typography>
        <Typography sx={{ my: "1rem" }}>{description}</Typography>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          px: "1rem",
          width: "100%",
          display: "flex",
          mx: { xs: 0, lg: "4rem" },
        }}
      >
        {cardTagButtons.map((btn) => (
          <Button
            key={Math.random()}
            size="small"
            color="violet"
            variant={
              btn.name.toLowerCase() === currentType.toLowerCase()
                ? "contained"
                : "text"
            }
            onClick={() => handleSetSuggestion(btn.name.toLowerCase())}
          >
            {btn.name}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
}
