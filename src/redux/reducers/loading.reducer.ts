import { ActionType } from '../action-types';

const initialState = {
    loading: false
}

const loadingReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionType.loading: 
            return true;
        case ActionType.loadingSuccess:
            return false;
        case ActionType.loadingError:
            return false;
        default:
            return state;
    }
}

export default loadingReducer;