import '@testing-library/jest-dom'
import { typesOrdenes } from '../../../redux/types/typesOrdenes'

describe('Verificar types', () => {
  test('Comparar typesOrdenes', () => {
    expect(typesOrdenes).toEqual({
      listarOrdenes: "ListarOrdenes",
      actualizarOrden: "ActualizarOrden",
      estadoPorDefecto: "EstadoPorDefecto",
      ordenPorDefecto: "OrdenActualPorDefecto",
      actualizarModalOrden: "ActualizarModalOrden",
      actualizarLoader: "ActualizarLoader"
    })
  })
})