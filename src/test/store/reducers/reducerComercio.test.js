import { reducerComercio } from '../../../redux/reducers/reducerComercio'
import { typesComercio } from '../../../redux/types/typesComercio'


describe('Pruebas sobre reducerComercio', () => {
  test('Debe validar la información del comercio', () => {
    const initialState = {}
    const action = {
      type: typesComercio.listarComercios,
      payload: [
        {
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
      ]
    }

    const state = reducerComercio(initialState, action)
    expect(state).toEqual({
      listaComercios: [
        {
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
      ]
    })
  })
})