import {
  Button,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Divider,
  Box,
} from "@mui/material";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { useForm } from "react-hook-form";

import { useCreateCommunity } from "../../hooks/communities/useCreateCommunity";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { validationRules } from "../../utils/validationRules";
import { useNavigate } from "react-router-dom";

export default function NewCommunityDialog({ open, handleClose }) {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const currentUser = useContext(UserContext);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const createImageBlob = (file) => {
    return new Promise((resolve, reject) => {
      if (!file) {
        console.log("No file provided");
        return reject("No file provided");
      }

      const reader = new FileReader();
      reader.onload = async (e) => {
        const blob = new Blob([e.target.result], { type: file.type });
        const storage = getStorage();
        const defaultImageName = Math.floor(
          Math.random() * 10000000
        ).toString();
        const storageRef = ref(storage, defaultImageName);

        try {
          await uploadBytes(storageRef, blob);
          const url = await getDownloadURL(
            ref(storage, `gs://uppinion-dev.appspot.com/${defaultImageName}`)
          );
          resolve(url);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  };

  const createCommunity = async (data) => {
    setLoading(true);

    let profileImageUrl = "";
    if (selectedFile) {
      try {
        // Await the URL from the createImageBlob function
        profileImageUrl = await createImageBlob(selectedFile);
      } catch (error) {
        console.error("Error uploading file:", error);
        setLoading(false);
        return; // Stop execution if file upload fails
      }
    }

    const { name, description } = data;
    const admin = currentUser.userId

    const { communityId, success, error } = await useCreateCommunity({
        admin: admin,
        members: currentUser.userId,
        image: profileImageUrl,
        description: description,
        name: name,
    });

    navigate(`/community-details/${communityId}`)
    handleClose();
    setLoading(false);
  };

  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a Community</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            Making the event planning inclusive to all participants starts
            here...
          </DialogContentText>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(createCommunity)}
          >
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Community Name"
              type="text"
              fullWidth
              variant="outlined"
              {...register("name", validationRules.name)}
            />

            <TextField
              autoFocus
              required
              multiline
              margin="dense"
              id="description"
              name="description"
              label="Description"
              type="text"
              fullWidth
              variant="outlined"
              {...register("description", validationRules.description)}
            />

            <input
              type="file"
              id="profileImage"
              name="profileImage"
              required
              accept="image/*"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />

            <DialogActions>
              <Button onClick={handleClose} disabled={loading}>
                Cancel
              </Button>
              <Button
                type="submit"
                color="violet"
                variant="contained"
                disabled={loading}
              >
                Create
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
