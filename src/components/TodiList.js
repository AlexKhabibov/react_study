import { useState } from "react";

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
        setList(list.filter((_, index) => index !== indexToRemove));
    };



    return (
        <>
            <h2>Список дел</h2>
            <input
                onChange={(e) => setTodo(e.target.value)}
                placeholder="дело" />
            <button onClick={handler}>Добавить дело</button>
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