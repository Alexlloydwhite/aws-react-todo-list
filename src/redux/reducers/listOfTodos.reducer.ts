import { ActionType } from '../action-types';
import { Action } from '../actions/index';

const listOfTodos = (state = [], action: Action) => {
    switch(action.type) {
        case ActionType.todoList:
            return action.payload;
        default:
            return state;
    }
}

export default listOfTodos;