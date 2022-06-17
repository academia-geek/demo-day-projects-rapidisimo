// Types
import { typesComercio } from "../types/typesComercio"

export const estadoPorDefecto = () => ({
  type: typesComercio.estadoPorDefecto
})

export const comercioPorDefecto = (payload) => ({
  type: typesComercio.comercioPorDefecto,
  payload
})

export const listarComercios = (payload) => ({
  type: typesComercio.listarComercios,
  payload
})

export const actualizarComercio = (payload) => ({
  type: typesComercio.actualizarComercio,
  payload
})
