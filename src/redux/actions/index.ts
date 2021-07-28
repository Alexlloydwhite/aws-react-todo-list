import { ActionType } from '../action-types/index';

interface TodoAction {
    type: ActionType.listOfTodos,
    payload: String
}

export type Action = TodoAction;