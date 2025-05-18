import { useState } from 'react';
import './App.css';
import ThemeContext from './components/themeContext';
import ThemedBlock from './components/ThemedBlock';

function App() {
  const lightTheme = { background: 'lightgray', color: 'black' };
  const darkTheme = { background: 'black', color: 'white' };

  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme.background === lightTheme.background ? darkTheme : lightTheme
    );
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <ThemedBlock />
        <button onClick={toggleTheme}>Сменить тему</button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;