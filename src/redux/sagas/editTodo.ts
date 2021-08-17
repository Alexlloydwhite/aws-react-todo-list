import { takeEvery, call, put } from "@redux-saga/core/effects";
import { ActionType } from '../action-types/index';
import axios from 'axios';

// Watcher
export function* editTodo() {
    yield takeEvery(ActionType.editTask, createWorker);
}

export function* createWorker(action: any) {
    try {
        yield put({ type: ActionType.loading });
        yield call(
            axios.put,
            `https://oajwgks9xh.execute-api.us-east-2.amazonaws.com/dev/edit-todo/${action.id}`,
            { editedTodo: action.edit }
        );
        yield put({ type: ActionType.loadingSuccess });
    } catch (error) { 
        console.log(error); 
        yield put({ type: ActionType.loadingError });
    }
}