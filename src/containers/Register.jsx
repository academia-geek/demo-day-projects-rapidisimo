import { useState } from "react";
import { useDispatch } from "react-redux";
import { RegisterAsync } from "../redux/actions/actionRegister";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Container,
  Box,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const validationSchema = yup.object({
  fullname: yup
        .string()
        .required("El Nombre es requerido")
        .min(2, "Muy Corto"),
      email: yup
        .string()
        .required("El Correo es requerido")
        .email("Debe ser un correo valido Ej: rapidisimo@gmail.com")
        .lowercase("El Correo debe estar en letras minusculas"),
      username: yup
        .string()
        .required("El UserName es requerido")
        .min(2, "Muy Corto"),
      password: yup
        .string()
        .required("El Password es requerido")
        .matches(lowercaseRegex, "Como minimo una Letra en minuscula")
        .matches(uppercaseRegex, "Como minimo una Letra en Mayuscula")
        .min(6, "Minimo 6 Caracteres")
        .max(10, "Maximo 10 Caracteres"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "las contraseñas no son iguales")
        .required("Se debe ingresar el password"),
      terms: yup
        .bool()
        .required()
        .oneOf([true], "Los terminos y condiciones deben ser aceptados"),
});


const Register = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [usuarioValido, setUsuarioValido] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },

    validationSchema: validationSchema,

    
    onSubmit: (values) => {
      console.log(formData);
      setUsuarioValido(true)
      alert(JSON.stringify(values, null, 2));
      dispatch(RegisterAsync(formData.email, formData.password));
    },
    
  });

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" >
            Register
          </Typography>
           
          
          {!usuarioValido && <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="fullname"
                    name="fullname"
                    label="Full Name"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    
                    onChange={formik.handleChange}
                    value={formik.values.fullname}
                    error={
                      formik.touched.fullname && Boolean(formik.errors.fullname)
                    }
                    helperText={
                      formik.touched.fullname && formik.errors.fullname
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="email"
                    name="email"
                    label="Email*"
                    fullWidth
                    autoComplete="email"
                    variant="standard"
                    autoFocus
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="username"
                    name="username"
                    label="Username"
                    fullWidth
                    autoComplete="username"
                    variant="standard"
                    autoFocus
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.username && Boolean(formik.errors.username)
                    }
                    helperText={
                      formik.touched.username && formik.errors.username
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    autoComplete="confirmPassword"
                    variant="standard"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.confirmPassword &&
                      Boolean(formik.errors.confirmPassword)
                    }
                    helperText={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox color="secondary" name="terms" value="yes" />
                    }
                    label="Terms and conditions have to accepted"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                REGISTRY
              </Button>
              <Button
                type="submit"
                onClick={formik.handleReset}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                RESET
              </Button>
              <Button
                onClick={() => navigate(-1)}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                BACK
              </Button>
            </Box>}
        
          
        </Box>
      </Container>
    </>
  );
};
export default Register;
