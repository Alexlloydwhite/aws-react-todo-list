const initialState = {
    loading: false
}

const loadingReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOADING': 
            return true;
        case 'LOADING_SUCCESS':
            return false;
        case 'LOADING_ERROR':
            return false;
        default:
            return state;
    }
}

export default loadingReducer;