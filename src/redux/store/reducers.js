import { combineReducers } from "redux"

// Reducers
import { reducerLogin } from "../reducers/reducerLogin";
import { reducerOrdenes } from "../reducers/reducerOrdenes";
import { reducerRepartidores } from "../reducers/reducerRepartidores";

export default combineReducers({
  user: reducerLogin,
  ordenes: reducerOrdenes,
  repartidores: reducerRepartidores,
});
