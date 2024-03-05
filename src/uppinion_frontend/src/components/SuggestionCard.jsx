import {
  Card,
  CardActionArea,
  IconButton,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { useContext, useState } from "react";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { NavLink } from "react-router-dom";

import colors from "../utils/colors";
import { useVote } from "../hooks/suggestions/useVote";
import { UserContext } from "../providers/UserProvider";
import CommentBox from "./dialogs/CommentBox";

export default function SuggestionCard({
  name,
  description,
  type,
  votes,
  suggestionId,
  voted,
  eventStatus,
  suggestedBy,
}) {
  const currentUser = useContext(UserContext);
  const [isMyVote, setIsMyVote] = useState(voted);
  const [voteCount, setVoteCount] = useState(votes);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

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
        <CommentBox
          open={open}
          handleClose={handleClose}
          suggestionName={name}
          suggestionType={type}
        />
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
            {voteCount + 40}
          </p>
          <p className="text-xs" style={{ color: colors.primary }}>
            {voteCount > 1 ? "VOTES" : "VOTE"}
          </p>
        </Card>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {name}
          </Typography>
          <Typography variant="body2">
            Type: {type} |{" "}
            <NavLink to={`/profile/${suggestedBy}`}>{suggestedBy}</NavLink>
          </Typography>
        </Box>
      </CardContent>
      <CardContent sx={{ py: "0", px: { xs: "0rem", lg: "1rem" }, mb: "1rem" }}>
        <Typography>{description}</Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          px: { xs: "0rem", lg: "1rem" },
          pb: "1rem",
          gap: "0.25rem",
        }}
      >
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
          startIcon={<ModeCommentOutlinedIcon sx={{ color: colors.primary }} />}
          color="violet"
          sx={{
            ml: "auto",
          }}
          onClick={() => setOpen(true)}
        >
          <p
            variant="body2"
            style={{
              fontWeight: "bold",
            }}
          >
            Comments
          </p>
        </Button>

        <span>|</span>

        <Button
          size="small"
          variant="text"
          startIcon={
            isMyVote ? (
              <ThumbDownOutlinedIcon sx={{ color: colors.error }} />
            ) : (
              <ThumbUpOutlinedIcon sx={{ color: colors.primary }} />
            )
          }
          color="violet"
          sx={{
            display: eventStatus.toLowerCase() === "open" ? "flex" : "none",
          }}
          onClick={
            isMyVote ? () => updateVote("delete") : () => updateVote("add")
          }
        >
          <p
            style={{
              color: isMyVote ? colors.error : colors.primary,
              fontWeight: "bold",
            }}
          >
            {isMyVote ? "Remove Vote" : "Vote"}
          </p>
        </Button>
      </CardActions>
      <Divider />
    </Card>
  );
}
