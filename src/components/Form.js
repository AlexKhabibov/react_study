import { useState } from "react";

function Form() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    function clearAllFields() {
        setName('');
        setSurname('');
    }

    return (
        <div>
            <input
                placeholder="input your name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                placeholder="input your surname"
                value={surname}
                onChange={e => setSurname(e.target.value)}
            />
            <p>Hello {name || 'name is empty'} {surname || 'surname is empty'}</p>
            <button onClick={()=> setName('')}>Очистить поле ввода Имени</button>
            <button onClick={()=> setSurname('')}>Очистить поле ввода Фамилии</button>
            <button onClick={clearAllFields}>Очистить все поля</button>
        </div>
    );
}

export default Form;