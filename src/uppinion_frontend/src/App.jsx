import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import { ThemeProvider } from "@emotion/react";
import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';
import colors from "./utils/colors";

const violetBase = '#7F00FF';
const violetMain = colors.primary;

const theme = createTheme({
  palette: {
    violet: {
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />;
    </ThemeProvider>
  );
}

export default App;
