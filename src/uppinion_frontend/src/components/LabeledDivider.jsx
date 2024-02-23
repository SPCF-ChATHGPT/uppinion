import { Divider, Typography } from "@mui/material";

export default function LabeledDivider({ label }) {
  return (
    <>
      <Divider />
      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
        {label}
      </Typography>
    </>
  );
}
