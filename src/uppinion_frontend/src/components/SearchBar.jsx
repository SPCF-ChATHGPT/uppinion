import { Box, TextField, Card, IconButton, Stack, Chip } from "@mui/material";
import colors from "../utils/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({}) {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Card elevation={0} sx={{ p: "1rem", backgroundColor: colors.background }}>
      <Box
        component="form"
        sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
      >
        <TextField
          id="search-bar"
          size="small"
          label="Search"
          variant="outlined"
          fullWidth
        />
        <IconButton>
          <FontAwesomeIcon icon={faFilter} style={{ color: colors.primary }} />
        </IconButton>
      </Box>
      <Stack
        direction="row"
        spacing={1}
        sx={{ alignItems: "center", mt: "1rem" }}
      >
        <p className="text-sm mt-4">Filters: </p>
        <Chip size="small" label="Deletable" onDelete={handleDelete} />
        <Chip size="small" label="Deletable" variant="outlined" onDelete={handleDelete} />
      </Stack>
    </Card>
  );
}
