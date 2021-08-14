import { ActionType } from '../action-types/index';

interface TodoAction {
    type: ActionType.listOfTodos,
    payload: string
}

interface AddTodoAction {
    type: ActionType.addTodo,
    payload: string
}

interface GetTodosAction {
    type: ActionType.getListOfTodos
}

export type Action = TodoAction | AddTodoAction | GetTodosAction;