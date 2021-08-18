import { takeEvery, call, put } from "@redux-saga/core/effects";
import { ActionType } from "../action-types/index";
import axios from "axios";
import { Action } from "redux";
import { StrictEffect } from "redux-saga/effects";

interface PayloadAction extends Action, IToggleComplete {
  type: ActionType.toggleComplete;
}

interface IToggleComplete {
  id: string;
  payload: boolean;
}

export function* toggleComplete(): Generator<StrictEffect> {
  yield takeEvery(ActionType.toggleComplete, createWorker);
}

export function* createWorker(action: PayloadAction) {
  try {
    yield call(
      axios.put,
      `https://oajwgks9xh.execute-api.us-east-2.amazonaws.com/dev/todo/${action.id}`,
      { completed: action.payload }
    );
  } catch (error) {
    console.log(error);
    yield put({ type: ActionType.loadingError });
  }
}
