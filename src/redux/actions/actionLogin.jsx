// Types
import { typesLogin } from "../types/typesLogin";

// Firebase
import { google, facebook } from "../../firebase/Firebase";
import {
  getAuth,
  signOut,
  updateProfile,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
} from "firebase/auth"

//---------- Logout ----------//
export const logoutAsync = () => {
  return (dispatch) => {
    const auth = getAuth()
    const userDelete = auth.currentUser

    deleteUser(userDelete)
    .then(() => {
      console.log("Usuario eliminado")
    }).catch((error) => {
      console.log(error)
    })

    signOut(auth)
      .then((user) => {
        console.log('Adios')
        dispatch(logout())

      })
      .catch(error => {
        console.warn(error)
      })
  }
}

export const logout = () => {
  return {
    type: typesLogin.logout
  }
}

//---------- Obtener Perfil Usuario con Firebase ----------//
export const getProfile = () => {
  return (dispatch) => {
    const auth = getAuth()
    const user = auth.currentUser
    if (user !== null) {
      const displayName = user.displayName
      const email = user.email
      const uid = user.uid
    }
  }
}

//---------- Login Asincornico con Firebase ----------//
export const loginAsync = (email, password) => {
  return (dispatch) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSync(user.email, user.password))
        console.log('Usuario autorizado')
      })
      .catch(error => {
        console.warn(error, 'No autorizado')
      })
  }
}

export const loginSync = (user, pass) => {
  return {
    type: typesLogin.login,
    payload: { user, pass }
  }
}

//---------- Validación con Google de Firebase ----------//
export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth()
    signInWithPopup(auth, google)
      .then(({ user }) => {
        console.log('Usuario autorizado')
      })
      .catch(error => {
        console.warn(error, 'No autorizado')
      })
  }
}

//---------- Validación con Facebook de Firebase ----------//
export const loginFacebook = () => {
  return (dispatch) => {
    const auth = getAuth()
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        console.log('Usuario autorizado')
      })
      .catch(error => {
        console.warn(error, 'No autorizado')
      })
  }
}

//---------- Para registrar en Firebase ----------//
export const registroAsync = (name, email, nickname, password) => {
  return (dispatch) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, name, email, nickname, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: nickname })
        dispatch(registroSync(name, email, nickname, password))
        alert('Usuario Registrado de manera exitosa')
      })
  }
}

export const registroSync = (name, email, nickname, password) => {
  return {
    type: typesLogin.registro,
    payload: {
      name, email, nickname, password
    }
  }
}
