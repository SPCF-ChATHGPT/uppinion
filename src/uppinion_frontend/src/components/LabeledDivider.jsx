import { Divider, Typography } from "@mui/material";

export default function LabeledDivider({ label, withDivider = false }) {
  return (
    <>
      {withDivider && <Divider />}
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {label}
      </Typography>
    </>
  );
}
