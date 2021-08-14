import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions/index';

export const addTodo = (todo: string) => {
    return(dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.addTodo,
            payload: todo
        });
    }
}

export const getTodos = () => {
    return(dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.getListOfTodos
        });
    }
}