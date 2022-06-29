import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Images from "../../components/Images";

export default function MainPage() {
  const navigate = useNavigate();
  const clickToSignIn = () => {
    navigate("/loginPage", { replace: true });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        width: 1000,
        m: "100px auto",
      }}
    >
      <Stack>
        <Typography variant="h2" mr={3} color="secondary.main">
          Купи работу!
          <Typography variant="h4" color="secondary.light">
            экономим твои деньги и время
          </Typography>
        </Typography>
        <Button
          sx={{ width: "100px", mt: 2 }}
          type="button"
          variant="contained"
          onClick={clickToSignIn}
        >
          ВОЙТИ
        </Button>
      </Stack>
      <Images />
    </Box>
  );
}
