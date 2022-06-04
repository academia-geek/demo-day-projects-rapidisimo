import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { typeRegistration } from "../types/types";
import { google } from "../../firebase/Firebase";
import { facebook } from "../../firebase/Firebase";


export const logoutAsync = () => {
  return (dispatch) => {
    const auth = getAuth();
    const userBorrar = auth.currentUser;
    console.log(userBorrar);

    deleteUser(userBorrar)
      .then(() => {
        console.log("usuario eliminado");
      })
      .catch((error) => {
        console.warn("No se pudo eliminar", error);
      });

    signOut(auth)
      .then((user) => {
        console.log("Hasta Pronto");
        dispatch(logout());
      })
      .catch((error) => {
        console.warn(error);
      });
  };
};
export const logout = () => {
  return {
    type: typeRegistration.logout,
  };
};
export const loginAsync = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSync(user.email, user.password));
        console.log("Usuario autorizado (login Async)");
      })
      .catch((error) => {
        alert("El usuario no existe");
        console.warn(error, "No autorizado (login Async)");
      });
  };
};
export const loginSync = (user, pass) => {
  return {
    type: typeRegistration.login,
    payload: { user, pass },
  };
};
export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        console.log(user, "Usuario autorizado (Login Google)");
      })
      .catch((error) => {
        console.warn(error, "No autorizado (Login Google)");
      });
  };
};
export const RegisterAsync = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        console.log(user);
        await updateProfile(auth.currentUser, { displayName: email });
        dispatch(RegisterSync(email, password));
        alert("Bienvenido!");
      })
      .catch((error) => {
        console.warn(
          error,
          alert(
            "Verifica tu informacion!"
          )
        );
      });
  };
};
export const RegisterSync = (email, password) => {
  return {
    type: typeRegistration.register,
    payload: {
      email,
      password,
    },
  };
};
export const loginFacebookAction = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook).then((user) => console.log(user));
  };
};

