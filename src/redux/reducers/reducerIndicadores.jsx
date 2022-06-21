import { typesIndicadores } from "../types/typesIndicadores"

const initialState = {
  entregas: null,
}

export const reducerIndicadores = (state = initialState, action) => {
  switch (action.type) {
    case typesIndicadores.totalEntregasHoy:
      return {
        ...state,
        entregas: action.payload,
      }


    default:
      return state
  }
}