import {
  Card,
  CardActionArea,
  Avatar,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
  Divider,
} from "@mui/material";

export default function CommunityCard({ name, description, members, image }) {
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
        <Avatar sx={{ width: 40, height: 40 }} src={image} alt="avatar" />
        <Box>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {name}
          </Typography>
          <Typography variant="body2">{members} members</Typography>
        </Box>
      </CardContent>
      <CardContent sx={{ py: "0", px: { xs: "0rem", lg: "1rem" }, mb: "1rem" }}>
        <Typography>{description}</Typography>
      </CardContent>

      <CardActions sx={{ px: { xs: "0rem", lg: "1rem" }, pb: "1rem" }}>
        <Button
          size="small"
          variant="text"
          color="violet"
          sx={{ ml: "auto", fontWeight: "bold" }}
        >
          REQUEST TO JOIN
        </Button>
      </CardActions>
      <Divider />
    </Card>
  );
}
