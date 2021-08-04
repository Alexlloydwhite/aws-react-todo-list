import { takeEvery, call, put } from "@redux-saga/core/effects";
import { ActionType } from '../action-types/index';
import axios from 'axios';

export function* addTodo() {
    yield takeEvery(ActionType.addTodo, createWorker);
}

export function* createWorker(action: any) {
    try {
        yield call(
            axios.post,
            'https://oajwgks9xh.execute-api.us-east-2.amazonaws.com/dev/',
            { todo: action.payload }
        );
        yield put({ type: ActionType.getListOfTodos });
    } catch (error) {
        console.log(error);
    }
}