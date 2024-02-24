import { Typography, TextField, Divider, Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import uppinionLogo from "../../assets/uppinion.png";
import colors from "../../utils/colors";
import { validationRules } from "../../utils/validationRules";
import { auth } from "../../config/firebase";

export default function LoginPage({}) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const signIn = (data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        setSuccess(false);
        setError(error.message);
        setLoading(false);
      });
  };

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
        mb: "2rem",
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
        SIGN IN
      </Typography>

      {error && (
        <Typography
          color={"black"}
          variant="body2"
          noWrap
          sx={{ color: colors.error, mb: "1rem" }}
        >
          {error}
        </Typography>
      )}

      <form onSubmit={handleSubmit(signIn)} style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <Typography variant="body1">Email</Typography>
          <TextField
            size="small"
            fullWidth
            type="email"
            name="email"
            {...register("email", validationRules.email)}
          ></TextField>
          <Typography variant="caption" sx={{ color: colors.error }}>
            {errors.email?.message}
          </Typography>
        </div>
        <div style={{ width: "100%", paddingTop: "1rem" }}>
          <Typography variant="body1">Password</Typography>
          <TextField
            size="small"
            fullWidth
            type="password"
            name="password"
            {...register("password", validationRules.password)}
          ></TextField>
          <Typography variant="caption" sx={{ color: colors.error }}>
            {errors.password?.message}
          </Typography>
        </div>

        <Button
          variant="contained"
          type="submit"
          fullWidth
          color="violet"
          sx={{ my: "0.75rem" }}
          disabled={loading}
        >
          {loading ? "LOADING" : "LOG IN"}
        </Button>
      </form>

      <Typography variant="subtitle2">
        Don't have an account?{" "}
        <a
          href="/register"
          style={{
            fontWeight: "bold",
            color: colors.primary,
            textDecoration: "underline",
          }}
        >
          REGISTER HERE
        </a>
      </Typography>
    </Box>
  );
}
