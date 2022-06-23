import { typesOrdenes } from "../types/typesOrdenes"

const initialState = {
  listaOrdenes: [],
  ordenActual: {
    "id_company": null,
    "client_email": "",
    "client_name": "",
    "client_phone": "",
    "client_address": "",
    "date_delivery": null,
    "estimated_time": "",
    "order_cost": 0,
    "image_order": "",
    "status_order": "",
    "rating": 0
  },
  modalOrden: false,
  loader: false
}

export const reducerOrdenes = (state = initialState, action) => {
  switch (action.type) {
    case typesOrdenes.estadoPorDefecto:
      return {
        ...initialState
      }

    case typesOrdenes.ordenPorDefecto:
      return {
        ...state,
        ordenActual: {
          ...state.ordenActual
        }
      }

    case typesOrdenes.listarOrdenes:
      return {
        ...state,
        listaOrdenes: action.payload
      }

    case typesOrdenes.actualizarOrden:
      return {
        ...state,
        ordenActual: {
          ...state.ordenActual,
          ...action.payload
        }
      }

    case typesOrdenes.actualizarModalOrden:
      return {
        ...state,
        modalOrden: action.payload
      }

    case typesOrdenes.actualizarLoader:
      return {
        ...state,
        loader: action.payload
      }

    default:
      return state
  }
}
