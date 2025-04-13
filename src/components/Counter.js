import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Счёт: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count * 2)}>х2</button>
            <button onClick={() => setCount(0)}>Сброс</button>
        </div>
    );
}

export default Counter;