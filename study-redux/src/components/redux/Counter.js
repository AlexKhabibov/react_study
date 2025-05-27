import { useSelector, useDispatch } from 'react-redux';

function Counter() {

    const counter = useSelector(state => state); // для получения данных о состоянии из стор
    const dispatch = useDispatch(); // хук для изменения состояния в стор через action

    const increment = () => {
        dispatch({ type: 'INCREMENT' })
    };

    const decrement = () => {
        dispatch({ type: 'DECREMENT' })
    };

    return (
        <div>
            <h1>Счетчик: {counter}</h1>
            <button onClick={increment}>Плюс 1</button>
            <button onClick={decrement}>Минус 1</button>
        </div>
    );
}

export default Counter;