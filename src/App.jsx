import { useState, useMemo } from "react";
// Solo imports de configuración y tema (sin Box ni Grid)
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Sidebar from "./components/Sidebar";
import Contenido from "./components/Contenido";
import LoginPage from "./LoginPage";

function App() {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#ff7976", contrastText: "#ffffff" },
          secondary: { main: "#0f121bff" },
        },
        shape: {
          borderRadius: 12,
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="d-flex min-vh-100">
          <Sidebar mode={mode} colorMode={colorMode} theme={theme} />

          <main
            className="flex-grow-1 d-flex flex-column p-4"
            style={{ overflowX: "auto" }}
          >
            <Contenido />
          </main>
        </div>
        {/* <LoginPage /> */}
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
