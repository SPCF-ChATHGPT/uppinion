import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export default function HomePage({}) {
  return (
    <>
      <Box component="div">
        <Outlet />
      </Box>
    </>
  );
}
