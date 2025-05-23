import { configureStore } from '@reduxjs/toolkit';

// создем функцию-редюсер (она как раз принимает текущее состояние (state) и конкретное действие (action), что делать с текущим состоянием. После чего возвращает новое состояние (измененное предыдущее состояние с помощью action)
const reducer = (state = 0, action) => {
    switch (action.type) { // switch наиболее популярнй, так как обычно действий много
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};


// создаем само хранилище состояний
export const store = configureStore({ reducer: reducer, })