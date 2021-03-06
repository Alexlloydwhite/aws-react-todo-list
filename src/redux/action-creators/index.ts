import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions/index";

export const addTodo = (todo: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.addTodo,
      payload: todo,
    });
  };
};

export const getTodos = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.getListOfTodos,
    });
  };
};

export const toggleTodoComplete = (todoId: string, toggle: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.toggleComplete,
      id: todoId,
      payload: toggle,
    });
  };
};

export const deleteTodoTask = (todoId: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.deleteTask,
      id: todoId,
    });
  };
};

export const editTodoTask = (todoId: string, editState: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.editTask,
      id: todoId,
      edit: editState,
    });
  };
};
