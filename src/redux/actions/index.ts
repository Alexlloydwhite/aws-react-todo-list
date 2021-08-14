import { ActionType } from '../action-types/index';

interface TodoAction {
    type: ActionType.listOfTodos,
    payload: string
}

interface AddTodoAction {
    type: ActionType.addTodo,
    payload: string
}

export type Action = TodoAction | AddTodoAction;