export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const increment_x = (nr) => {
    return {
        type: 'INCREMENT_X',
        payload: nr
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const decrement_x = (nr) => {
    return {
        type: 'DECREMENT_X',
        payload: nr
    };
};