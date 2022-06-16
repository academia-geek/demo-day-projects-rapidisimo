// Types
import { typesRepartidor } from "../types/typesRepartidor"

const initialState = {
  listaRepartidores: [],
  estadoActual: {
    "id_user": null,
    "email": "",
    "document": null,
    "name": "",
    "lastname": "",
    "phone": null,
    "delivery_man_status": "",
    "vehicle": "",
    "rol": "",
    "user_image": ""
  },
  modalRepartidor: false,
  loader: false
}

export const reducerRepartidores = (state = initialState, action) => {
  switch (action.type) {
    case typesRepartidor.estadoPorDefecto:
      return {
        ...initialState
      }

    case typesRepartidor.repartidorPorDefecto:
      return {
        ...state,
        estadoActual: {
          ...state.estadoActual,
        }
      }

    case typesRepartidor.listarRepartidores:
      return {
        ...state,
        listaRepartidores: action.payload
      }

    case typesRepartidor.actualizarRepartidor: {
      return {
        ...state,
        estadoActual: {
          ...state.estadoActual,
          ...action.payload
        }
      }
    }

    // case typesRepartidor.detalleRepartidor: {
    //   return {
    //     ...state,
    //     ...action.payload
    //   }
    // }

    case typesRepartidor.modalDetalleRepartidor:
      return {
        ...state,
        modalRepartidor: action.payload
      }


    case typesRepartidor.actualizarLoader:
      return {
        ...state,
        loader: action.payload
      }

    default:
      return state
  }
}