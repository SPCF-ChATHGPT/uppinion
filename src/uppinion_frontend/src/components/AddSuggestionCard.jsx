import { Box, Avatar, TextField, Button, Card } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export default function AddSuggestionCard({}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "start",
          gap: "0.75rem",
          mx: { xs: 0, lg: "4rem" },
          mt: "1rem",
          p: "1rem",
        }}
      >
        <Card
          elevation={0}
          variant="outlined"
          sx={{
            display: "flex",
            p: "1rem",
            borderRadius: 3,
            alignItems: "start",
            gap: "1rem",
            width: { xs: "100%", sm: "70%" },
          }}
        >
          <Avatar />
          <TextField
            multiline
            variant="standard"
            placeholder="Make a suggestion..."
            fullWidth
          />
        </Card>
        <Card
          elevation={0}
          variant="outlined"
          sx={{
            width: { xs: "100%", sm: "30%" },
            p: "1rem",
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="violet"
            fullWidth
            startIcon={<CheckCircleOutlineOutlinedIcon />}
          >
            Will Attend
          </Button>
        </Card>
      </Box>
    </>
  );
}
