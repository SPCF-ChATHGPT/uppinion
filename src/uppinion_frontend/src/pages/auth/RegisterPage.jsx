import {
  Typography,
  TextField,
  Divider,
  Box,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import uppinionLogo from "../../assets/uppinion.png";
import colors from "../../utils/colors";
import { auth, db } from "../../config/firebase";
import { validationRules } from "../../utils/validationRules";
import defaultUserImage from "../../assets/default-images/default_user_image.jpg";

export default function RegisterPage({}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const genders = ["Male", "Female"];
  const [gender, setGender] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      username: "",
      gender: "",
      age: "",
      address: "",
      email: "",
      password: "",
    },
  });

  const signUp = (data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        // Signed up
        //Creates an image url for the default user image profile
        let defaultImage = {
          name: Math.floor(Math.random() * 10000000).toString(),
          blob: null,
        };
        fetch(defaultUserImage)
          .then((response) => response.blob())
          .then((myBlob) => {
            defaultImage.blob = myBlob;
          });

        //Upload profile image to firebase storage
        const storage = getStorage();
        const storageRef = ref(storage, defaultImage.name);

        // Saves user info in the "users" collection
        await addDoc(collection(db, "users"), {
          name: data.username,
          age: data.age,
          gender: data.gender,
          address: data.address,
          email: data.email,
          profile_image: defaultImage.name,
        });

        uploadBytes(storageRef, defaultImage.blob).then((snapshot) => {
          console.log(snapshot);
        });

        await updateProfile(auth.currentUser, {
          displayName: data.name,
        });

        setSuccess(true);
        setLoading(false);
        navigate("/login");
      })
      .catch((error) => {
        setSuccess(false);
        setError(error.message);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    //Only for the "Select" field (gender)
    console.log(e.target.value);
    setGender(e.target.value);
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
        REGISTER
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

      <form onSubmit={handleSubmit(signUp)} style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <Typography variant="body1">Username</Typography>
          <TextField
            size="small"
            fullWidth
            name="username"
            {...register("username", validationRules.username)}
          ></TextField>
          <Typography variant="caption" sx={{ color: colors.error }}>
            {errors.username?.message}
          </Typography>
        </div>

        <div style={{ width: "100%", paddingTop: "1rem" }}>
          <Typography variant="body1">Gender</Typography>
          <Controller
            control={control}
            name="gender"
            rules={validationRules.gender}
            render={({ field }) => (
              <Select
                id="gender-select"
                size="small"
                fullWidth
                value={field.value}
                onChange={field.onChange}
                error={!!errors.gender}
              >
                {genders.map((gender, index) => (
                  <MenuItem key={gender} value={gender.toLowerCase()}>
                    {gender}
                  </MenuItem>
                ))}
              </Select>
            )}
          />

          <Typography variant="caption" sx={{ color: colors.error }}>
            {errors.gender?.message}
          </Typography>
        </div>

        <div style={{ width: "100%", paddingTop: "1rem" }}>
          <Typography variant="body1">Age</Typography>
          <TextField
            size="small"
            fullWidth
            type="number"
            name="age"
            {...register("age", validationRules.age)}
          ></TextField>
          <Typography variant="caption" sx={{ color: colors.error }}>
            {errors.age?.message}
          </Typography>
        </div>

        <div style={{ width: "100%", paddingTop: "1rem" }}>
          <Typography variant="body1">Address</Typography>
          <TextField
            size="small"
            fullWidth
            name="address"
            {...register("address", validationRules.address)}
          ></TextField>
          <Typography variant="caption" sx={{ color: colors.error }}>
            {errors.address?.message}
          </Typography>
        </div>

        <div style={{ width: "100%", paddingTop: "1rem" }}>
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
          fullWidth
          type="submit"
          color="violet"
          sx={{ my: "0.75rem" }}
          disabled={loading}
        >
          {loading ? "LOADING" : "REGISTER"}
        </Button>
      </form>
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
