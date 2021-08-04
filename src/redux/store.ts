import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/_rootReducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/_rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    {},
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
