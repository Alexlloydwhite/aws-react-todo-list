import { all } from 'redux-saga/effects';
import { fetchTodos } from './fetchTodos';
import { addTodo } from './addTodo';
import { deleteTodo } from './deleteTodo';
import { toggleComplete } from './toggleComplete';
import { editTodo } from './editTodo';

export default function* rootSaga(): Generator {
    yield all([
        fetchTodos(),
        addTodo(),
        deleteTodo(),
        toggleComplete(),
        editTodo()
    ]);
}