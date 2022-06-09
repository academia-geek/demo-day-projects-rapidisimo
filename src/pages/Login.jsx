// Base
import React from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import {
  loginAsync,
  loginGoogle,
  loginFacebook,
} from "../redux/actions/actionLogin";

// Hook
import useForm from "../hooks/useForm";

// Material Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const Login = (props) => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, reset] = useForm({
    user: "",
    pass: "",
  });

  const { user, pass } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAsync(user, pass));
    reset();
  };

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
            space-y-8 p-8 md:md:p-16
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
            <p
              className="
                text-start underline underline-offset-8 decoration-primary
              "
            >
              Login
            </p>

            <Link className="text-start" to="/register">
              Registro
            </Link>
          </section>

          <div>
            <p className="mb-3 text-xl font-medium text-white">
              Inicia sesión con
            </p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => dispatch(loginFacebook())}
                className="
                  flex items-center justify-center
                  w-1/2 h-11
                  text-3xl text-white
                  border border-white rounded
                  transition ease-in-out delay-150
                  hover:shadow-slate-200 hover:shadow-md
                "
              >
                <FacebookIcon sx={{ fontSize: 36 }} />
              </button>

              <button
                onClick={() => dispatch(loginGoogle())}
                className="
                  flex items-center justify-center
                  w-1/2 h-11
                  text-3xl text-white
                  border border-white rounded
                  transition ease-in-out delay-150
                  hover:shadow-slate-200 hover:shadow-md
                "
              >
                <GoogleIcon sx={{ fontSize: 36 }} />
              </button>
            </div>
          </div>

          <hr className="text-white" />

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  name="user"
                  type="email"
                  value={user}
                  onChange={handleInputChange}
                  autoComplete="off"
                  required
                  className="
                    appearance-none relative
                    w-full px-3 py-3 border mb-10
                    border-white bg-transparent text-base
                    placeholder-white text-white rounded-md
                    focus:outline-none focus:ring-primary
                    focus:border-primary focus:z-10
                  "
                  placeholder="Correo electrónico"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  name="pass"
                  type="password"
                  value={pass}
                  onChange={handleInputChange}
                  autoComplete="off"
                  required
                  className="
                    appearance-none relative block
                    w-full px-3 py-3 border border-white mb-10
                    bg-transparent
                    placeholder-white text-white rounded-md
                    focus:outline-none focus:ring-primary
                    focus:border-primary focus:z-10
                  "
                  placeholder="Contraseña"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="
                  group relative flex justify-center w-full
                  py-2 px-4 border border-transparent text-sm font-medium
                  rounded-md text-background bg-primary focus:outline-none
                  focus:ring-2 focus:ring-offset-2 uppercase
                "
              >
                Login
              </button>
            </div>
          </form>

          <div
            className="
              flex flex-col md:flex-row
              items-center justify-center
              mt-10 text-base md:text-lg uppercase
            "
          >
            <p className="md:mr-2 text-white">¿Aun no tiene una cuenta?</p>
            <Link to="/register" className="text-primary font-medium">
              Registro
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
