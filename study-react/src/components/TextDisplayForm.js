import { TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

function TextDisplayForm() {

    const [text, setText] = useState('');
    const [showText, setShowText] = useState([]);

    function clickHandler(e) {
        if (text.trim() === '') return; // не добавляем пустые строки
        setShowText([...showText, text]);     // добавляем новый текст в список
        setText('');
    }

    return (
        <>
            <TextField
                onChange={(e) => setText(e.target.value)}
                label='Введите текст'
                fullWidth
                value={text} />
            <Button onClick={clickHandler}>Отобразить введенный текст</Button>
            {showText.length > 0 && (
                <div style={{ marginTop: 20 }}>
                    <Typography variant="h6">Список введённых текстов:</Typography>
                    {showText.map((item, index) => (
                        <Typography key={index} style={{ marginTop: 5 }}>
                            {index + 1}. {item}
                        </Typography>
                    ))}
                </div>
            )}
        </>
    );
}

export default TextDisplayForm;