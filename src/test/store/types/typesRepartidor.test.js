import '@testing-library/jest-dom'
import { typesRepartidor } from '../../../redux/types/typesRepartidor'

describe('Verificar types', () => {
  test('Comparar typesRepartidor', () => {
    expect(typesRepartidor).toEqual({
      listarRepartidores: "ListarRepartidores",
      actualizarRepartidor: "ActualizarRepartidor",
      estadoPorDefecto: "EstadoPorDefecto",
      repartidorPorDefecto: "RepartidorPorDefecto",
      modalDetalleRepartidor: "ModalDetalleRepartidor",
      actualizarLoader: "ActualizarLoader",
      detalleRepartidor: 'DetalleRepartidor',
      cambiarRepartidorOrden: 'CambiarRepartidorOrden',
      cambiarRepartidorPorDefecto: 'RepartidorPorDefecto'
    })
  })
})