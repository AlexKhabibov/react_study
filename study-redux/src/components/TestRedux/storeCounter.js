import { configureStore } from "@reduxjs/toolkit";

const counterReduser2 = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    };
};

export const counterStore2 = configureStore({ reducer: counterReduser2 });