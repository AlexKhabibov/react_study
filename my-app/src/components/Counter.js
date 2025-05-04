import React, { useState } from 'react';
import Button from '@mui/material/Button';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Счёт: {count}</p>
            <Button size='small' variant="contained" onClick={() => setCount(count + 1)}>+</Button>
            <Button size='small' variant="contained" onClick={() => setCount(count - 1)}>-</Button>
            <Button size='small' variant="contained" color="success" onClick={() => setCount(count * 2)}>х2</Button>
            <Button size='small' variant="contained" color="error" onClick={() => setCount(0)}>Сброс</Button>
        </div>
    );
}

export default Counter;