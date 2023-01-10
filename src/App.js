import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

// import in project
import Topbar from "./pages/global/Topbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Sidebar from "./pages/global/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import Team from "./pages/team";
import Contact from "./pages/contacts";
import Invoice from "./pages/invoice";
import Profile from "./pages/profile";
import Calendar from "./pages/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/invoice" element={<Invoice />} />
                <Route path="/form" element={<Profile />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
