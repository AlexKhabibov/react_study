import { useSelector, useDispatch } from 'react-redux';

function Counter() {

    const counter = useSelector(state => state); // для получения данных о состоянии из стор
    const dispatch = useDispatch(); // хук для изменения состояния в стор через action

    const increment = () => {
        return {
            type: 'INCREMENT',
            payload: 1
        };
    };

    const decrement = () => {
        return {
            type: 'DECREMENT',
            payload: 1
        };
    };

    return (
        <div>
            <h1>Счетчик: {counter}</h1>
            <button onClick={() => dispatch(increment())}>Плюс 1</button>
            <button onClick={() => dispatch(decrement())}>Минус 1</button>
        </div>
    );
}

export default Counter;