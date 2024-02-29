import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useContext, useState } from "react";

import colors from "../utils/colors";
import { useVote } from "../hooks/suggestions/useVote";
import { UserContext } from "../providers/UserProvider";

export default function SuggestionCard({
  name,
  description,
  type,
  votes,
  suggestionId,
  voted,
  eventStatus,
}) {
  const currentUser = useContext(UserContext);
  const [isMyVote, setIsMyVote] = useState(voted);
  const [voteCount, setVoteCount] = useState(votes);

  const updateVote = (action) => {
    const { error } = useVote(suggestionId, action, currentUser?.userId);

    if (error) return;

    switch (action) {
      case "add":
        setIsMyVote(true);
        setVoteCount((prevCount) => prevCount + 1);
        break;

      case "delete":
        setIsMyVote(false);
        setVoteCount((prevCount) => prevCount - 1);
        break;

      default:
        break;
    }
  };

  return (
    <Card elevation={0}>
      <CardContent
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          px: { xs: "0rem", lg: "1rem" },
        }}
      >
        <Card
          variant="outlined"
          sx={{
            p: "1rem",
            width: "4rem",
            height: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderColor: colors.primary,
            borderRadius: 3,
          }}
        >
          <p className="text-lg font-bold" style={{ color: colors.primary }}>
            {voteCount}
          </p>
          <p className="text-xs" style={{ color: colors.primary }}>
            {voteCount > 1 ? "VOTES" : "VOTE"}
          </p>
        </Card>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {name}
          </Typography>
          <Typography variant="body2">Type: {type}</Typography>
        </Box>
      </CardContent>
      <CardContent sx={{ py: "0", px: { xs: "0rem", lg: "1rem" }, mb: "1rem" }}>
        <Typography>{description}</Typography>
      </CardContent>

      <CardActions sx={{ px: { xs: "0rem", lg: "1rem" }, pb: "1rem" }}>
        {isMyVote && (
          <Typography
            variant="subtitle2"
            sx={{ fontStyle: "italic", mr: "auto", color: "gray" }}
          >
            You voted this suggestion
          </Typography>
        )}

        <Button
          size="small"
          variant="text"
          startIcon={
            isMyVote ? (
              <ThumbDownIcon sx={{ color: colors.error }} />
            ) : (
              <ThumbUpIcon sx={{ color: colors.primary }} />
            )
          }
          color="violet"
          sx={{
            ml: "auto",
            display: eventStatus.toLowerCase() === "open" ? "flex" : "none"
          }}
          onClick={
            isMyVote ? () => updateVote("delete") : () => updateVote("add")
          }
        >
          <p
            className="font-bold"
            style={{ color: isMyVote ? colors.error : colors.primary }}
          >
            {isMyVote ? "Remove Vote" : "Vote"}
          </p>
        </Button>
      </CardActions>
      <Divider />
    </Card>
  );
}
