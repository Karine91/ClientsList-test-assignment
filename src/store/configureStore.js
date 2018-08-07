import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import clientsReducer from "../reducers/clients";
import detailReducer from "../reducers/detail";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      clients: clientsReducer,
      detail: detailReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
