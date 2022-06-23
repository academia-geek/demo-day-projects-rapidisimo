import { combineReducers } from "redux"
import { reducerComercio } from "../reducers/reducerComercio"
import { reducerIndicadores } from "../reducers/reducerIndicadores"

// Reducers
import { reducerLogin } from "../reducers/reducerLogin"
import { reducerOrdenes } from "../reducers/reducerOrdenes"
import { reducerPerfil } from "../reducers/reducerPerfil"
import { reducerRepartidores } from "../reducers/reducerRapartidores"

export default combineReducers({
  comercios: reducerComercio,
  indicadores: reducerIndicadores,
  ordenes: reducerOrdenes,
  perfil: reducerPerfil,
  repartidores: reducerRepartidores,
  user: reducerLogin,
})
