// src/components/TodoApp.tsx
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { addTodo, removeTodo } from '../features/toDoSlice'
import { Button, TextField, Stack, Box, Typography, Paper } from '@mui/material'

export default function TodoApp() {
    const [text, setText] = useState('')
    const todos = useSelector((state: RootState) => state.todos.list)
    const dispatch = useDispatch()

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTodo(text))
            setText('')
        }
    }

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
            <Typography variant="h5" gutterBottom>
                📝 Список дел
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center" mb={3}>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Новое дело..."
                />
                <Button variant="contained" size="medium" onClick={handleAdd}>
                    Добавить
                </Button>
            </Stack>

            <Stack spacing={1}>
                {todos.map((todo) => (
                    <Paper
                        key={todo.id}
                        elevation={2}
                        sx={{
                            p: 2,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: '#f9f9f9',
                            borderRadius: 2,
                        }}
                    >
                        <Typography>{todo.text}</Typography>
                        <Button
                            variant="contained"
                            color="error"
                            size="small"
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            Удалить
                        </Button>
                    </Paper>
                ))}
            </Stack>
        </Box>
    )
}
