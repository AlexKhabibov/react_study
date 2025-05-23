import { useState } from 'react';
import './App.css';
import ThemeContext from './components/context/themeContext';
import ThemedBlock from './components/context/ThemedBlock';
import { HelloWithDefaultName } from './components/hoc/WithDefaultName';
import { CompButtonWithStyles } from './components/hoc2Styles/withStyles';
import Counter from './components/redux/Counter';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';


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
    <>
      <div className="App">Изучаем React Context
        <ThemeContext.Provider value={theme}>
          <ThemedBlock />
          <button onClick={toggleTheme}>Сменить тему</button>
        </ThemeContext.Provider>
      </div>

      <div className='App'>
        Изучаем HOC
        <HelloWithDefaultName name='Alex' />
        {/* по умолчанию будет имя гость */}
      </div >

      <div className='App'>
        HOC стилизация компонентов
        <CompButtonWithStyles />
      </div>

      <div className='App'>
        Работа Redux store
        <Provider store={store}>
          {/* без провайдера не будет работать стор */}
          <Counter />
        </Provider>
      </div>
    </>
  );
}

export default App;