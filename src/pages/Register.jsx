// Base
import React from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { registroAsync } from "../redux/actions/actionLogin";

// Formik
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";


const SingUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Valor muy corto!")
    .max(15, "Valor muy largo!")
    .required("Campo sin información"),
  email: Yup.string()
    .email("Correo Invalido")
    .required("Campo sin información"),
  password: Yup.string()
    .min(6, "Clave muy corta!")
    .max(30, "Valor de clave muy largo!")
    .required("Campo sin información"),
});

const Register = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="
        w-screen h-screen overflow-x-auto
        bg-[url('https://res.cloudinary.com/rapidisimo/image/upload/v1654528206/rapidisimo/train-821500_1_1_jy8bh8.png')]
        bg-cover bg-no-repeat bg-right-top
      "
    >
      <section
        className="
          relative
          flex items-center justify-center
          w-full h-full px-4
          bg-black/60
        "
      >
        <div
          className="
            w-full max-w-3xl h-auto
            space-y-8 p-8 md:p-16
            backdrop-blur-sm bg-white/30
            shadow-lg shadow-black/40
          "
        >
          <section
            className="
              flex justify-start gap-8 md:gap-16 mb-44
              text-white text-xl md:text-2xl font-medium
              tracking-wider uppercase
            "
          >
            <Link className="text-start" to="/login">
              Login
            </Link>

            <Link
              className="text-start underline underline-offset-8 decoration-primary"
              to="/register"
            >
              Registro
            </Link>
          </section>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            validationSchema={SingUpSchema}
            onSubmit={(values) => {
              dispatch(
                registroAsync(
                  values.name,
                  values.email,
                  values.password
                )
              );
            }}
          >
            {({ errors, touched, handleReset, handleSubmit }) => (
              <Form className="mt-8" onSubmit={handleSubmit}>
                <Field
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  className="
                    appearance-none relative block
                    w-full px-3 py-3 mb-4 border border-white
                    bg-transparent
                    placeholder-white text-white rounded-md
                    focus:outline-none focus:primary
                    focus:border-primary focus:z-10 sm:text-base
                  "
                />

                {errors.name && touched.name ? (
                  <div className="text-white">{errors.name}</div>
                ) : null}

                <Field
                  name="email"
                  type="email"
                  placeholder="Correo electrónico"
                  className="
                    appearance-none relative block
                    w-full px-3 py-3 mb-4 border border-white
                    bg-transparent
                    placeholder-white text-white rounded-md
                    focus:outline-none focus:primary
                    focus:border-primary focus:z-10 sm:text-base
                  "
                />
                {errors.email && touched.email ? (
                  <div className="text-white">{errors.email}</div>
                ) : null}

                <Field
                  name="password"
                  type="password"
                  autoComplete="off"
                  placeholder="Contraseña"
                  className="
                    appearance-none relative block
                    w-full px-3 py-3 mb-4 border border-white
                    bg-transparent
                    placeholder-white text-white rounded-md
                    focus:outline-none focus:primary
                    focus:border-primary focus:z-10 sm:text-base
                  "
                />

                {errors.password && touched.password ? (
                  <div className="text-white">{errors.password}</div>
                ) : null}

                <div className="mt-3">
                  <button
                    type="submit"
                    className="
                    group relative flex justify-center w-full
                    py-2 px-4 border border-transparent text-sm font-medium
                    rounded-md text-background bg-primary focus:outline-none
                    focus:ring-2 focus:ring-offset-2 uppercase
                  "
                  >
                    Aceptar
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <div
            className="
              flex flex-col md:flex-row
              items-center justify-center
              mt-10 text-base md:text-lg uppercase
            "
          >
            <p className="md:mr-2 text-white">¿Ya tienes una cuenta?</p>
            <Link to="/login" className="text-primary font-medium">
              Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
