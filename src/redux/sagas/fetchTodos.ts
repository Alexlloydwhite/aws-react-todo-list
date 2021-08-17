import { takeEvery, put, call, StrictEffect } from "@redux-saga/core/effects";
import { ActionType } from '../action-types/index';
import axios, { AxiosResponse } from 'axios';

export function* fetchTodos(): Generator<StrictEffect> {
    yield takeEvery(ActionType.getListOfTodos, createWorker);
}

export function* createWorker() {
    try {
        yield put({ type: ActionType.loading });
        const listOfTodos: AxiosResponse = yield call(axios.get, 'https://oajwgks9xh.execute-api.us-east-2.amazonaws.com/dev/todos');
        yield put({ type: ActionType.listOfTodos, payload: listOfTodos.data });
        yield put({ type: ActionType.loadingSuccess });
    } catch (error) { 
        console.log(error); 
        yield put({ type: ActionType.loadingError });
    }
}