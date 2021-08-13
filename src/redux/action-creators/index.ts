import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions/index';

export const listOfTodos = (list: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.listOfTodos,
            payload: list
        });
    }
}