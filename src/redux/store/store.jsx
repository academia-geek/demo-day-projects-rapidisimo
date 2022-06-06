// Redux
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

// Reducers
import { reducerLogin } from "../reducers/reducerLogin";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  user: reducerLogin,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
