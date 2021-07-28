import { ActionType } from '../action-types';
import { Action } from '../actions/index';

interface TodoListState {
    initialState: {
        completed: boolean,
        createdAt: string,
        id: string,
        todo: string
    }
}

const initialState: TodoListState["initialState"] = {
    completed: false,
    createdAt: '',
    id: '',
    todo: ''
}

const listOfTodos = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.listOfTodos:
            return action.payload;
        default:
            return state;
    }
}

export default listOfTodos;