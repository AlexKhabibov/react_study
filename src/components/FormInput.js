import { useState } from "react";

function FormInput() {
    const [text, setText] = useState('');

    // const showInputText = ({target}) => {
    //     setText(target.value)
    // }

    return (
        <>
            <input
                onChange={({target}) => setText(target.value)} // можно напрямую без отдельной функуии
                placeholder="input text"
                 />
            <p>{text || 'empty'}</p>
        </>
    );
}

export default FormInput;