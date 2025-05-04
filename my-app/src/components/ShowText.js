import { useState } from "react";
import Button from '@mui/material/Button';


function ShowText({dataText}) {
    const [text, setText] = useState();

    function updateText() {
        setText(!text)
    }

    return (
        <>
            <Button onClick={updateText}>Показать/Скрыть текст</Button>
            <p style={{display: text ? 'block' : 'none'}}>{dataText}</p>
        </>
    );
}

export default ShowText;