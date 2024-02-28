import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import "./App.css";
import routes from "./routes";
import { ThemeProvider } from "@emotion/react";
import { createTheme, alpha, getContrastRatio } from "@mui/material/styles";
import colors from "./utils/colors";
import UserProvider from "./providers/UserProvider";

const violetBase = "#7F00FF";
const violetMain = colors.primary;

const theme = createTheme({
  palette: {
    mode: 'dark',
    violet: {
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText:
        getContrastRatio(violetMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <RouterProvider router={routes} />
        </ThemeProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
