import { useState } from "react";

function ShowText({dataText}) {
    const [text, setText] = useState();

    function updateText() {
        setText(!text)
    }

    return (
        <>
            <button onClick={updateText}>Показать/Скрыть текст</button>
            <p style={{display: text ? 'block' : 'none'}}>{dataText}</p>
        </>
    );
}

export default ShowText;