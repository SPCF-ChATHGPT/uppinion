import CommunityHeader from "../../components/CommunityHeader";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const community = {
  name: "Information and Communications Technology Development Unit",
  image: "/assets/spcf-ictdu.jpg",
  memberCount: 250,
};

const headerButtons = [
  { 
    name: "Edit Details", 
    icon: <EditOutlinedIcon sx={{ color: "white" }} /> 
  },
  {
    name: "Join Requests",
    icon: <AddCircleOutlineOutlinedIcon sx={{ color: "white" }} />,
  },
  {
    name: "Add Event",
    icon: <CalendarTodayOutlinedIcon sx={{ color: "white" }} />,
  },
];

export default function HomePage({}) {
  return (
    <>
      <CommunityHeader headerButtons={headerButtons} community={community} />
      <Box component="div" sx={{ m: "1rem" }}>
        <Outlet />
      </Box>
    </>
  );
}
