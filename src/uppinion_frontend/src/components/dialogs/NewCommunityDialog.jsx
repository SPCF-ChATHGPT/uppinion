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

import { useCreateCommunity } from "../../hooks/communities/useCreateCommunity";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../../providers/UserProvider";

export default function NewCommunityDialog({ open, handleClose }) {
  const [loading, setLoading] = useState(false);
  const currentUser = useContext(UserContext);
  const imageRef = useRef();

  const createCommunity = (event) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    const name = formJson.name;
    const description = formJson.description;
    const image = imageRef.current.value;
    const admin = { user_id: currentUser?.userId };

    console.log({
      admin: admin,
      image: image,
      description: description,
      name: name,
    });

    // const { success } = useCreateCommunity({
    //   admin: admin,
    //   image: image,
    //   description: description,
    //   name: name,
    // });

    handleClose();
    setLoading(false);
  };

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            createCommunity(event);
          },
        }}
      >
        <DialogTitle>Create a Community</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            Making the event planning inclusive to all participants starts
            here...
          </DialogContentText>
          <div className="flex flex-col gap-4">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Community Name"
              type="text"
              fullWidth
              variant="standard"
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
              variant="standard"
            />

            <input type="file" />
          </div>
        </DialogContent>
        <DialogActions sx={{ px: "1.5rem", mb: "0.5rem" }}>
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
      </Dialog>
    </Box>
  );
}
