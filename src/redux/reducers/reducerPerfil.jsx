// Types
import { typesPerfil } from "../types/typesPerfil"

const initialState = {
  listaPerfiles: [],
  perfilActual: {
    "id_user": null,
    "email": "",
    "document": null,
    "name": "",
    "lastname": "",
    "phone": null,
    "delivery_man_status": "",
    "vehicle": "",
    "rol": "Admin",
    "user_image": "",
    "user_latitude": "",
    "user_longitude": ""
  },
  loader: false
}

export const reducerPerfil = (state = initialState, action) => {
  switch (action.type) {
    case typesPerfil.estadoPorDefecto:
      return {
        ...initialState
      }

    case typesPerfil.perfilPorDefecto:
      return {
        ...state,
        perfilActual: {
          ...state.perfilActual,
        }
      }

    case typesPerfil.listarPerfiles:
      return {
        ...state,
        listaPerfiles: action.payload
      }

    case typesPerfil.actualizarPerfil: {
      return {
        ...state,
        perfilActual: {
          ...state.perfilActual,
          ...action.payload
        }
      }
    }

    case typesPerfil.actualizarLoader:
      return {
        ...state,
        loader: action.payload
      }

    default:
      return state
  }
}