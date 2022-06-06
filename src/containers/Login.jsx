import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  loginAsync,
  loginGoogle,
  loginFacebookAction,
} from "../redux/actions/actionRegister";
import "../styles/index.css";
import { useFormik } from "formik";
import {
  Button,
  TextField,
  Container,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import ReactDOM from "react-dom";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      
    >
      {"Copyright © "}
      <a href="https://github.com/academia-geek/demo-day-projects-rapidisimo">
        Rapidisimo
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Login = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      
      alert(JSON.stringify(values, null, 2));
      dispatch(loginAsync(user.correo, user.password));
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h6" >
            Sign in
          </Typography>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            
            fullWidth
            id="email"
            name="email"
            label="Email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            margin="normal"
            
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="buttons-login"
            onClick={() => dispatch(loginGoogle())}
          >
            Sign In With
            <img
              className="iconsInicio"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="buttons-login"
            onClick={() => dispatch(loginFacebookAction())}
          >
            Sign In With
            <img
              className="iconsInicio"
              src="https://res.cloudinary.com/docutv7ug/image/upload/v1652654644/iconFacebook_iltudz.png"
              alt="Facebook button"
            />
          </Button>

          <Grid container>
            <Grid item xs>
              <a href="#" variant="body2">
                Forgot password?
              </a>
            </Grid>
            <Grid item>
              <a href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </a>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};
export default Login;
