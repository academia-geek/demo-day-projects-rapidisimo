import '@testing-library/jest-dom'
import { typesComercio } from '../../../redux/types/typesComercio'

describe('Verificar types', () => {
  test('Comparar typesComercio', () => {
    expect(typesComercio).toEqual({
      listarComercios: "ListarComercios",
      actualizarComercio: "ActualizarComercio",
      comercioPorDefecto: "ComercioPorDefecto"
    })
  })
})