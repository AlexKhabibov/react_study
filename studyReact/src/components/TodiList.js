import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function TodoList() {

    const [todo, setTodo] = useState('');
    const [list, setList] = useState([])

    const handler = () => {
        if (!todo.trim()) {
            return
        };
        setList([...list, todo]);
        setTodo('');
    }

    const removeTodo = (indexToRemove) => {
        setList(list.filter((item, index) => index !== indexToRemove));
      };



    return (
        <>
            <h2>Список дел</h2>
            <TextField
                onClick={(e) => setTodo(e.target.value)}
                placeholder="дело" />
            <Button onClick={handler}>Добавить дело</Button>
            <ul>
                {list.map((item, index) => (
                    <li key={list.indexOf(item)}>{item}
                        <button onClick={() => removeTodo(index)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;