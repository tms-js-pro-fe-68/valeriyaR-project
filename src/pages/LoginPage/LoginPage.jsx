/* eslint-disable jsx-a11y/label-has-associated-control */
import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import LogoFragment from "../../components/LogoFragment";
import Page from "../../components/Page";

export default function LoginPage() {
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting }) => {
    const { email, password } = values;

    const response = await fetch(
      "https://tms-js-pro-back-end.herokuapp.com/api/users/signin",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const data = await response.json();

    if (data.token && data.email) {
      sessionStorage.token = data.token;
      sessionStorage.email = data.email;
      navigate("/homePage", { replace: true });
    }

    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validationSchema: object().shape({
      email: string().email().required(),
      password: string().min(3).required(),
    }),
    validateOnMount: true,
  });

  return (
    <Page bgcolor="secondary.main">
      <Box
        sx={{
          background: "rgba(255, 255, 255, 1)",
          width: "400px",
          height: "450px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          borderRadius: "4%",
        }}
      >
        <form
          style={{
            display: "grid",
            width: "300px",
            gap: 16,
          }}
          onSubmit={formik.handleSubmit}
        >
          <LogoFragment
            src="./pictures/owlLoginPage.png"
            color="secondary.main"
          />
          <TextField
            label="Логин"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={
              formik.touched.email &&
              !!formik.errors.email &&
              formik.errors.email
            }
          />
          <TextField
            label="Пароль"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={
              formik.touched.password &&
              !!formik.errors.password &&
              formik.errors.password
            }
          />
          <Button
            variant="contained"
            type="submit"
            disabled={!formik.isValid && !formik.isSubmitting}
          >
            ВОЙТИ
          </Button>
        </form>
      </Box>
    </Page>
  );
}
