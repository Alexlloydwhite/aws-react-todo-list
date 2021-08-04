import { all } from 'redux-saga/effects';
import { fetchTodos } from './fetchTodos';
import { addTodo } from './addTodo';

export default function* rootSaga(): Generator {
    yield all([
        fetchTodos(),
        addTodo()
    ]);
}