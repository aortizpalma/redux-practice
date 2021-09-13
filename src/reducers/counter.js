const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'INCREMENT_X':
            return state + action.payload;
            case 'DECREMENT':
                return state - 1;
            case 'DECREMENT_X':
                return state - action.payload;
        default:
            return state;
    }
};

export default counterReducer;