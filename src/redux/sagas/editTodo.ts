import { takeEvery, call, put } from "@redux-saga/core/effects";
import { ActionType } from "../action-types/index";
import { Action } from "redux";
import axios from "axios";
import { StrictEffect } from "redux-saga/effects";

interface PayloadAction extends Action, IEditTodo {
  type: ActionType.editTask;
}

interface IEditTodo {
  id: string;
  edit: string;
}

export function* editTodo(): Generator<StrictEffect> {
  yield takeEvery(ActionType.editTask, createWorker);
}

export function* createWorker(action: PayloadAction) {
  try {
    yield put({ type: ActionType.loading });
    yield call(
      axios.put,
      `https://oajwgks9xh.execute-api.us-east-2.amazonaws.com/dev/todo/edit/${action.id}`,
      { editedTodo: action.edit }
    );
    yield put({ type: ActionType.getListOfTodos });
  } catch (error) {
    console.log(error);
    yield put({ type: ActionType.loadingError });
  }
}
