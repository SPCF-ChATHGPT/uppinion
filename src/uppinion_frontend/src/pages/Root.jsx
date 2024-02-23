import { Outlet } from "react-router-dom";
import NavigationDrawer from "./NavigationDrawer";
import NavDrawer from "./NavDrawer";

export default function Root({}) {
  return (
    <>
      <NavDrawer>
        <Outlet />
      </NavDrawer>
      {/* <NavigationDrawer>
        <Outlet />
      </NavigationDrawer> */}
    </>
  );
}
