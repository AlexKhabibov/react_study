import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function FormInput2() {
    const [inputVal, setInputVal] = useState('');
    const [submittedVal, setSubmittedVal] = useState('');

    useEffect(
        () => { console.log('input value changed:', inputVal) }, [inputVal]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedVal(inputVal);
        setInputVal('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setInputVal(e.target.value)}
                    type="text"
                    value={inputVal} />
                <Button type="submit">Отправить форму</Button>
            </form>
            {submittedVal && <p>Отправлено: {submittedVal}</p>}
        </div>
    );
}

export default FormInput2;