/**Список дел с Material UI

Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

Компоненты:
Используйте TextField для ввода новой задачи.
Добавьте Button для добавления задачи в список.
Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

Логика:
При нажатии на кнопку добавления, новая задача должна добавляться в список.
Рядом с каждой задачей должна быть кнопка для её удаления. */

import { TextField, Button, IconButton } from "@mui/material";
import { useState } from "react";
import { List, ListItem, Card } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList2() {

    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    function addTask() {
        if (newTask.trim()) {  // Проверка, чтобы не добавлять пустую задачу
            setTasks([...tasks, newTask]);  // Добавляем новую задачу в список
            setNewTask('');  // Очищаем поле ввода
        }
    }

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <TextField
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                label="Новая задача"
            />
            <Button onClick={addTask}>Добавить задачу</Button>

            <List>
                {tasks.map((task, index) => (
                    <ListItem key={index}>
                        <Card style={{ padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
                            <span>{task}</span>
                            <IconButton onClick={() => removeTask(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </Card>
                    </ListItem>
                ))}
            </List>


        </div>
    );
}

export default TodoList2;