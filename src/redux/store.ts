import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/_rootReducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/_rootSaga";
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(logger, sagaMiddleware, thunk)
);

sagaMiddleware.run(rootSaga);
