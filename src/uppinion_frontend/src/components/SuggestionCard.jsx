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
import colors from "../utils/colors";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function SuggestionCard({ name, description, type, votes }) {
  return (
    <Card elevation={0}>
      <CardContent sx={{ display: "flex", gap: "1rem", alignItems: "center", px: {xs: "0rem", lg: "1rem"} }}>
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
            {votes}
          </p>
          <p className="text-xs" style={{ color: colors.primary }}>
            VOTES
          </p>
        </Card>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {name}
          </Typography>
          <Typography variant="body2">Type: {type}</Typography>
        </Box>
      </CardContent>
      <CardContent sx={{ py: "0", px: {xs: "0rem", lg: "1rem"}, mb: "1rem"}}>
        <Typography>{description}</Typography>
      </CardContent>

      <CardActions sx={{ px: {xs: "0rem", lg: "1rem"}, pb: "1rem" }}>
        <Typography
          variant="subtitle2"
          sx={{ fontStyle: "italic", mr: "auto", color: "gray" }}
        >
          You voted this suggestion
        </Typography>
        <Button
          size="small"
          variant="text"
          startIcon={<ThumbUpIcon />}
          color="violet"
          sx={{ ml: "auto" }}
        >
          <p className="font-bold" style={{color: colors.primary}}>VOTE</p>
        </Button>
      </CardActions>
      <Divider />
    </Card>
  );
}
