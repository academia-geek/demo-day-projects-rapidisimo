import { typesPerfil } from "../types/typesPerfil"

export const estadoPorDefecto = () => ({
  type: typesPerfil.estadoPorDefecto
})

export const repartidorPorDefecto = (payload) => ({
  type: typesPerfil.repartidorPorDefecto,
  payload
})

export const listarPerfiles = (payload) => ({
  type: typesPerfil.listarPerfiles,
  payload
})

export const actualizarPerfil = (payload) => ({
  type: typesPerfil.actualizarPerfil,
  payload
})

export const actualizarLoader = (payload) => ({
  type: typesPerfil.actualizarLoader,
  payload
})

