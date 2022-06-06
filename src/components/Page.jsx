import { Box } from "@mui/material";

export default function Page({ bgcolor , ...otherProps }) {
  return (
    <Box
      bgcolor={bgcolor}
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
      {...otherProps}
    />
  );
}

