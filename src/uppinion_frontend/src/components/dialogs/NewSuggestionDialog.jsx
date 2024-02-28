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
  Select,
  MenuItem,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { UserContext } from "../../providers/UserProvider";
import { validationRules } from "../../utils/validationRules";
import { useCreateSuggestion } from "../../hooks/suggestions/useCreateSuggestion";

export default function NewSuggestionDialog({ open, handleClose }) {
  const suggestionTypes = ["Venue", "Theme", "Program", "Others"];
  const [loading, setLoading] = useState(false);
  const { eventId } = useParams();
  const currentUser = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      suggestionType: "",
    },
  });

  const createSuggestion = async (data) => {
    setLoading(true);

    const { suggestionId, success, message } = await useCreateSuggestion({
      description: data.description,
      eventId: eventId,
      name: data.name,
      type: data.suggestionType.toUpperCase(),
      userId: currentUser.userId,
    });

    handleClose();
    setLoading(false);
  };

  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Make a Suggestion</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            Share your suggestions to create a stunning event for everyone.
          </DialogContentText>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(createSuggestion)}
          >
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Suggestion Name"
              type="text"
              fullWidth
              variant="outlined"
              {...register("name", validationRules.name)}
            />

            <Controller
              control={control}
              name="suggestionType"
              rules={validationRules.suggestionType}
              render={({ field }) => (
                <Select
                  id="suggestion-type-select"
                  label="Type"
                  fullWidth
                  value={field.value}
                  onChange={field.onChange}
                  error={!!errors.suggestionType}
                >
                  {suggestionTypes.map((type, index) => (
                    <MenuItem key={type} value={type.toLowerCase()}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              )}
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

// export default NewSuggestionDialog;
