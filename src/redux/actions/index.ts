import { ActionType } from "../action-types/index";

interface TodoAction {
  type: ActionType.listOfTodos;
  payload: string;
}

interface LoadingAction {
  type: ActionType.loading;
}

interface LoadingSuccessAction {
  type: ActionType.loadingSuccess;
}

interface LoadingErrorAction {
  type: ActionType.loadingError;
}

interface AddTodoAction {
  type: ActionType.addTodo;
  payload: string;
}

interface GetTodosAction {
  type: ActionType.getListOfTodos;
}

interface ToggleTodoCompleteAction {
  type: ActionType.toggleComplete;
  id: string;
  payload: boolean;
}

interface DeleteTodoAction {
  type: ActionType.deleteTask;
  id: string;
}

interface EditTodoAction {
  type: ActionType.editTask;
  id: string;
  edit: string;
}

export type Action =
  | TodoAction
  | AddTodoAction
  | EditTodoAction
  | GetTodosAction
  | ToggleTodoCompleteAction
  | DeleteTodoAction
  | LoadingAction
  | LoadingSuccessAction
  | LoadingErrorAction;
