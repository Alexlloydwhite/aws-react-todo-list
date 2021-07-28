import { takeEvery, put, call, StrictEffect } from "@redux-saga/core/effects";
import { ActionType } from '../action-types/index';
import axios, { AxiosResponse } from 'axios';

// Watcher
export function* fetchTodos(): Generator<StrictEffect> {
    yield takeEvery(ActionType.getListOfTodos, createWorker);
}

// Worker 
export function* createWorker() {
    try {
        // Call API
        const listOfTodos: AxiosResponse = yield call(axios.get, 'https://oajwgks9xh.execute-api.us-east-2.amazonaws.com/dev/todos');
        // Update redux store
        yield put({ type: ActionType.listOfTodos, payload: listOfTodos.data });
    } catch (err) { console.log(err); }
}