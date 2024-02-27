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
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useContext, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";

import { UserContext } from "../../providers/UserProvider";
import { validationRules } from "../../utils/validationRules";
import { useCreateEvent } from "../../hooks/events/useCreateEvent";

export default function NewEventDialog({ open, handleClose }) {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const { communityId } = useParams();
  const currentUser = useContext(UserContext);
  const navigate = useNavigate();

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

  const createEvent = async (data) => {
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

    const { name, description, date } = data;

    const { eventId, success, error } = await useCreateEvent({
      communityId: communityId,
      date: format(selectedDate.$d, 'MM-dd-yyyy'),
      description: description,
      name: name,
      image: profileImageUrl,
      status: "OPEN",
    });

    navigate(`/event-details/${communityId}/${eventId}`);

    handleClose();
    setLoading(false);
  };

  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create an Event</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            Collect superb ideas from the brilliant minds within the
            community...
          </DialogContentText>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(createEvent)}
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

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  required
                  id="date"
                  name="date"
                  label="Date"
                  value={selectedDate}
                  onChange={(newVal) => setSelectedDate(newVal)}
                  sx={{ width: "100%" }}
                />
              </DemoContainer>
            </LocalizationProvider>

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
