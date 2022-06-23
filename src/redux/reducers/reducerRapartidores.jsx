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
    "user_image": "",
    "user_latitude": "",
    "user_longitude": ""
  },
  repartidorOrden: null,
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

    case typesRepartidor.cambiarRepartidorOrden: {
      return {
        ...state,
        repartidorOrden: action.payload
      }
    }

    case typesRepartidor.cambiarRepartidorPorDefecto: {
      return {
        ...state,
        repartidorOrden: null
      }
    }

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
