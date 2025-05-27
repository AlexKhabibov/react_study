import { useSelector, useDispatch } from 'react-redux';

function Counter2() {

    const counter = useSelector(state => state);
    const dispatch = useDispatch()

    const increment = () => {
        dispatch({ type: 'INCREMENT' })
    };

    const decrement = () => {
        dispatch({ type: 'DECREMENT' })
    };

    return (
        <>
            <h2>Пример использования счетсика 2</h2>
            <p>{counter}</p>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </>
    );
}

export default Counter2;