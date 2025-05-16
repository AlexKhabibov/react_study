import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Form() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    function clearAllFields() {
        setName('');
        setSurname('');
    }

    return (
        <div>
            <TextField
                placeholder="input your name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <TextField
                placeholder="input your surname"
                value={surname}
                onChange={e => setSurname(e.target.value)}
            />
            <p>Hello {name || 'name is empty'} {surname || 'surname is empty'}</p>
            <Button onClick={()=> setName('')}>Очистить поле ввода Имени</Button>
            <Button onClick={()=> setSurname('')}>Очистить поле ввода Фамилии</Button>
            <Button onClick={clearAllFields}>Очистить все поля</Button>
        </div>
    );
}

export default Form;