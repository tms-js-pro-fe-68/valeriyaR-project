import { Box, Typography } from "@mui/material";

export default function LogoFragment({ src, color }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img style={{ width: "100px", height: "100px" }} src={src} alt="owl" />
      <Typography variant="h5" color={color}>
        КУПИ <br /> РАБОТУ!
      </Typography>
    </Box>
  );
}
