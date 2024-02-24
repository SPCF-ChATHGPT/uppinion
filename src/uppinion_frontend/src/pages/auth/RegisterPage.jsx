import { Typography, TextField, Divider, Box, Button } from "@mui/material";
import uppinionLogo from "../../assets/uppinion.png";
import colors from "../../utils/colors";

export default function RegisterPage({}) {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        p: "1rem",
        minHeight: "100vh",
        alignItems: "center",
        width: { xs: "100%", sm: "50%", md: "30%" },
        mx: "auto",
        mb: "2rem"
      }}
    >
      <img
        src={uppinionLogo}
        alt="uppinion_logo"
        style={{ width: "100px", height: "100px" }}
      />
      <Typography
        color={"black"}
        variant="h5"
        noWrap
        sx={{ fontWeight: "bold" }}
      >
        UP<span style={{ color: colors.primary }}>PINION</span>
      </Typography>
      <Typography variant="subtitle2" noWrap sx={{ fontStyle: "italic" }}>
        "Make Every Event a Community Masterpiece"
      </Typography>
      <Divider sx={{ width: "100%", mt: "2rem" }}></Divider>
      <Typography
        color={"black"}
        variant="h6"
        noWrap
        sx={{ fontWeight: "bold", color: colors.primary }}
      >
        REGISTER
      </Typography>

      <div style={{ width: "100%" }}>
        <Typography variant="body1">Username</Typography>
        <TextField size="small" fullWidth></TextField>
      </div>
      <div style={{ width: "100%", paddingTop: "1rem" }}>
        <Typography variant="body1">Gender</Typography>
        <TextField size="small" fullWidth></TextField>
      </div>
      <div style={{ width: "100%", paddingTop: "1rem" }}>
        <Typography variant="body1">Age</Typography>
        <TextField size="small" fullWidth></TextField>
      </div>
      <div style={{ width: "100%", paddingTop: "1rem" }}>
        <Typography variant="body1">Address</Typography>
        <TextField size="small" fullWidth></TextField>
      </div>
      <div style={{ width: "100%", paddingTop: "1rem" }}>
        <Typography variant="body1">Email</Typography>
        <TextField size="small" fullWidth></TextField>
      </div>
      <div style={{ width: "100%", paddingTop: "1rem" }}>
        <Typography variant="body1">Password</Typography>
        <TextField size="small" fullWidth type="password"></TextField>
      </div>
      <Button
        variant="contained"
        fullWidth
        color="violet"
        sx={{ my: "0.75rem" }}
      >
        REGISTER
      </Button>
      <Typography variant="subtitle2">
       Already have an account?{" "}
        <a
          href="/login"
          style={{
            fontWeight: "bold",
            color: colors.primary,
            textDecoration: "underline",
          }}
        >
          SIGN IN HERE
        </a>
      </Typography>
    </Box>
  );
}
