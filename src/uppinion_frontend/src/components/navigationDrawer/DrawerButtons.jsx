import { List, ListItem, ListItemButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import colors from "../../utils/colors";

export default function DrawerButtons({ buttons }) {
  return (
    <>
      <List>
        {buttons.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ gap: "2rem", p: 0 }}>
              <NavLink
                to={item.path}
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? colors.primary : "black",
                    backgroundColor: isActive ? colors.navBackground : "",
                  };
                }}
                className="w-full px-4 py-3 rounded-sm flex gap-8 items-center"
              >
                {item.icon}
                <p className="text-sm">{item.name}</p>
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
