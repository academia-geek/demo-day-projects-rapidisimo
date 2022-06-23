// Types
import { typesOrdenes } from "../types/typesOrdenes"

export const listarOrdenes = (payload) => ({
  type: typesOrdenes.listarOrdenes,
  payload
})

export const estadoPorDefecto = () => ({
  type: typesOrdenes.estadoPorDefecto
})

export const ordenPorDefecto = (payload) => ({
  type: typesOrdenes.ordenPorDefecto,
  payload
})

export const actualizarOrden = (payload) => ({
  type: typesOrdenes.actualizarOrden,
  payload
})

export const actualizarModalOrden = (payload) => ({
  type: typesOrdenes.actualizarModalOrden,
  payload
})

export const actualizarLoader = (payload) => ({
  type: typesOrdenes.actualizarLoader,
  payload
})
