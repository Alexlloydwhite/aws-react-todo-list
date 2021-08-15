import { takeEvery, call, put } from "@redux-saga/core/effects";
import { ActionType } from '../action-types/index';
import axios from 'axios';

export function* deleteTodo() {
    yield takeEvery(ActionType.deleteTask, createWorker);
}

export function* createWorker(action: any) {
    try {
        yield put({ type: 'LOADING' });
        yield call(
            axios.delete, 
            `https://oajwgks9xh.execute-api.us-east-2.amazonaws.com/dev/todo/${action.id}`
        );
        yield put({ type: ActionType.getListOfTodos });
        yield put({ type: 'LOADING_SUCCESS' });
    } catch (error) { 
        console.log(error);
        yield put({ type: 'LOADING_ERROR' });
    }
}