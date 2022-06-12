import { combineReducers } from "redux"

// Reducers
import { reducerLogin } from "../reducers/reducerLogin";
import { reducerOrdenes } from "../reducers/reducerOrdenes";

export default combineReducers({
  user: reducerLogin,
  ordenes: reducerOrdenes,
});
