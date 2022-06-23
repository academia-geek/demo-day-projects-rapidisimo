import '@testing-library/jest-dom'
import { typesPerfil } from '../../../redux/types/typesPerfil'

describe('Verificar types', () => {
  test('Comparar typesPerfil', () => {
    expect(typesPerfil).toEqual({
      listarPerfiles: "ListarPerfiles",
      actualizarPerfil: "ActualizarPerfil",
      estadoPorDefecto: "EstadoPorDefecto",
      perfilPorDefecto: "PerfilPorDefecto",
      actualizarLoader: "ActualizarLoader"
    })
  })
})