// Redux
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

// Reducers
import { reducerLogin } from "../reducers/reducerLogin";
import { reducerOrdenes } from "../reducers/reducerOrdenes";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  user: reducerLogin,
  ordenes: reducerOrdenes,
});

export const store = createStore(
  reducers,
  applyMiddleware(thunk)
);
