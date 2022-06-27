/* eslint-disable react/jsx-props-no-spreading */
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Page({ sx, bgcolor, ...otherProps }) {
  const navigate = useNavigate();
  const navigateToLoginPage = () => {
    navigate("/loginPage", { replace: "true" });
  };
  
  useEffect(() => {
    if (!sessionStorage.token) {
      navigateToLoginPage();
    }
  });

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
