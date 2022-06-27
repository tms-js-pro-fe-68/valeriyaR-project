import './App.css';
import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/homePage" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
