import { takeEvery, call, put, StrictEffect } from "@redux-saga/core/effects";
import { Action } from "redux";
import { ActionType } from "../action-types/index";
import axios from "axios";

interface PayloadAction extends Action, IAddTodo {
  type: ActionType.addTodo;
}

interface IAddTodo {
  payload: string;
}

export function* addTodo(): Generator<StrictEffect> {
  yield takeEvery(ActionType.addTodo, createAddTodoWorker);
}

export function* createAddTodoWorker(action: PayloadAction) {
  try {
    yield put({ type: ActionType.loading });
    yield call(
      axios.post,
      "https://oajwgks9xh.execute-api.us-east-2.amazonaws.com/dev/",
      { todo: action.payload }
    );
    yield put({ type: ActionType.getListOfTodos });
    yield put({ type: ActionType.loadingSuccess });
  } catch (error) {
    console.log(error);
    yield put({ type: ActionType.loadingError });
  }
}
