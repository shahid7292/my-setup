import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import AppReducers from "./reducers/root.reducers";
import allSagas from "./sagas/root.saga";

import { persistStore, persistReducer } from "redux-persist";
// Defaults to SessionStorage
import sessionStorage from "redux-persist/es/storage/session";

const middleWares = [];

middleWares.push(logger);

const persistConfig = {
  key: "root",
  storage: sessionStorage,
};

const persistedReducer = persistReducer(persistConfig, AppReducers);
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  middleWares.push(sagaMiddleware);

  const allMiddleWares = compose(applyMiddleware(...middleWares));
  const store = createStore(persistedReducer, allMiddleWares);
  let persistor = persistStore(store);

  //Running all Worker Sagas
  sagaMiddleware.run(allSagas);

  return { store, persistor };
};

export default configureStore;
