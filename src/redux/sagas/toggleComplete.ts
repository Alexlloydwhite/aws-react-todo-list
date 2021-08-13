import { takeEvery, call, put } from "@redux-saga/core/effects";
import { ActionType } from '../action-types/index';
import axios from 'axios';

// Watcher
export function* toggleComplete() {
    yield takeEvery(ActionType.toggleComplete, createWorker);
}

export function* createWorker(action: any) {
    try {
        yield call(
            axios.put,
            `https://oajwgks9xh.execute-api.us-east-2.amazonaws.com/dev/todo/${action.id}`
        )
    } catch (err) { console.log(err); }
}