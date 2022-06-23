/* eslint-disable react/jsx-props-no-spreading */
import { Box } from "@mui/material";

export default function Page({ sx, bgcolor, ...otherProps }) {
  return (
    <Box
      bgcolor={bgcolor}
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
      {...otherProps}
    />
  );
}
