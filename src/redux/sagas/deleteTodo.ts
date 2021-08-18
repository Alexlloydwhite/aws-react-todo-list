import { takeEvery, call, put } from "@redux-saga/core/effects";
import { ActionType } from "../action-types/index";
import axios from "axios";
import { Action } from "redux";
import { StrictEffect } from "redux-saga/effects";

interface DeleteAction extends Action, IDeleteTodo {
  type: ActionType.deleteTask;
}

interface IDeleteTodo {
  id: string;
}

export function* deleteTodo(): Generator<StrictEffect> {
  yield takeEvery(ActionType.deleteTask, createWorker);
}

export function* createWorker(action: DeleteAction) {
  try {
    yield put({ type: ActionType.loading });
    yield call(
      axios.delete,
      `https://oajwgks9xh.execute-api.us-east-2.amazonaws.com/dev/todo/${action.id}`
    );
    yield put({ type: ActionType.getListOfTodos });
    yield put({ type: ActionType.loadingSuccess });
  } catch (error) {
    console.log(error);
    yield put({ type: ActionType.loadingError });
  }
}
