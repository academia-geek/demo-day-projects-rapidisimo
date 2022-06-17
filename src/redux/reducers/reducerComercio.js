// Types
import { typesComercio } from "../types/typesComercio"

const initialState = {
  listaComercios: [],
  comercioActual: {
    "id_company": null,
    "email_company": "",
    "name_company": "",
    "phone_company": null,
    "city": "Medellín",
    "neighborhood": "",
    "companie_address": "",
    "close_time_company": null,
    "company_latitude": "",
    "company_longitude": ""
  }
}

export const reducerComercio = (state = initialState, action) => {
  switch (action.type) {
    case typesComercio.estadoPorDefecto:
      return {
        ...initialState
      }

    case typesComercio.comercioPorDefecto:
      return {
        ...state,
        comercioActual: {
          ...state.comercioActual,
        }
      }

    case typesComercio.listarComercios:
      return {
        ...state,
        listaComercios: action.payload
      }

    case typesComercio.actualizarComercio: {
      return {
        ...state,
        comercioActual: {
          ...state.comercioActual,
          ...action.payload
        }
      }
    }

    default:
      return state
  }
}