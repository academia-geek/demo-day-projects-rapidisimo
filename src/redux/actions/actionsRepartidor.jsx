// Types
import { typesRepartidor } from "../types/typesRepartidor"

export const estadoPorDefecto = () => ({
  type: typesRepartidor.estadoPorDefecto
})

export const repartidorPorDefecto = (payload) => ({
  type: typesRepartidor.repartidorPorDefecto,
  payload
})

export const listarRepartidores = (payload) => ({
  type: typesRepartidor.listarRepartidores,
  payload
})

export const actualizarRepartidor = (payload) => ({
  type: typesRepartidor.actualizarRepartidor,
  payload
})

export const cambiarRepartidorOrden = (payload) => ({
  type: typesRepartidor.cambiarRepartidorOrden,
  payload
})

export const cambiarRepartidorPorDefecto = () => ({
  type: typesRepartidor.cambiarRepartidorPorDefecto
})

export const modalDetalleRepartidor = (payload) => ({
  type: typesRepartidor.modalDetalleRepartidor,
  payload
})

export const actualizarLoader = (payload) => ({
  type: typesRepartidor.actualizarLoader,
  payload
})
