import { Button, Box, TextField, InputAdornment, AppBar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import LogoFragment from "../../components/LogoFragment";
import AddNewJob from "./AddNewJob";
import { useHomePageContext } from "./HomePageContext";

export default function HomeAppBar() {
  const { setValue } = useHomePageContext();
  const navigate = useNavigate();
  const clickLogOut = () => {
    sessionStorage.token = "";
    sessionStorage.email = "";
    navigate("/", { replace: true });
  };

  return (
    <>
      <AppBar sx={{ bgcolor: "secondary.main" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            p: "0 20px",
          }}
        >
          <LogoFragment
            src="./pictures/owlHomePage.jpg"
            color="primary.light"
          />
          <TextField
            label="Хочу работать..."
            size="small"
            color="primary"
            id="search"
            onChange={(e) => setValue(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <AddNewJob />
          <Button type="button" variant="outlined" onClick={clickLogOut}>
            ВЫЙТИ
          </Button>
        </Box>
      </AppBar>
      <Box sx={{ height: "100px" }} />
    </>
  );
}
