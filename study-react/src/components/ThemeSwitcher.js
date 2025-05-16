import { useState } from "react";

function ThemeSwitcher() {

    const [theme, setTheme] = useState('');

    function toggleTheme() {
        if (theme === 'light') {
            setTheme('dark');
            document.querySelector('body').style.backgroundColor = 'darkGrey ';
        } else {
            setTheme('light');
            document.querySelector('body').style.backgroundColor = 'white';
        }
    }

    return (
        <>
            <button onClick={toggleTheme}>Переключить тему</button>
        </>
    );
}

export default ThemeSwitcher;