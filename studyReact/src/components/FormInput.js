import { useState } from "react";
import TextField from '@mui/material/TextField';


function FormInput() {
    const [text, setText] = useState('');

    // const showInputText = ({target}) => {
    //     setText(target.value)
    // }

    return (
        <>
            <TextField
                onChange={({target}) => setText(target.value)} // можно напрямую без отдельной функуии
                placeholder="input text"
                 />
            <p>{text || 'empty'}</p>
        </>
    );
}

export default FormInput;