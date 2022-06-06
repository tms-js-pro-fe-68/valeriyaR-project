import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
       <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router> 
    </ThemeProvider>
  );
}
