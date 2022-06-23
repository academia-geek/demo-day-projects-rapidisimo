import '@testing-library/jest-dom'
import { typesLogin } from '../../../redux/types/typesLogin'

describe('Verificar types', () => {
  test('Comparar typesLogin', () => {
    expect(typesLogin).toEqual({
      login: 'Login',
      logout: 'Logout',
      register: "Register",
    })
  })
})