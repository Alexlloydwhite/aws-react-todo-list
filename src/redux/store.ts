import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/_rootReducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { fetchTodos } from './sagas/fetchTodos';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    {},
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(fetchTodos);
