import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/_rootReducer';
import logger from 'redux-logger';

export const store = createStore(
    rootReducer,
    {},
    applyMiddleware(logger)
);
