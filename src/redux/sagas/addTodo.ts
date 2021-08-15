import { takeEvery, call, put } from "@redux-saga/core/effects";
import { ActionType } from '../action-types/index';
import axios from 'axios';

// Watcher
export function* addTodo() {
    yield takeEvery(ActionType.addTodo, createWorker);
}

// Worker
export function* createWorker(action: any) {
    try {
        yield put({ type: ActionType.loading });
        yield call(
            axios.post,
            'https://oajwgks9xh.execute-api.us-east-2.amazonaws.com/dev/',
            { todo: action.payload }
        );
        yield put({ type: ActionType.getListOfTodos });
        yield put({ type: ActionType.loadingSuccess });
    } catch (error) { 
        console.log(error); 
        yield put({ type: ActionType.loadingError });
    }
}