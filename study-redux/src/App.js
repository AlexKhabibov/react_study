import { useState } from 'react';
import './App.css';
import ThemeContext from './components/context/themeContext';
import ThemedBlock from './components/context/ThemedBlock';
import { HelloWithDefaultName } from './components/hoc/WithDefaultName';
import { CompButtonWithStyles } from './components/hoc2Styles/withStyles';
import Counter from './components/redux/Counter/Counter';
import { Provider } from 'react-redux';
import { counterStore } from './components/redux/Counter/store';
import Loading from './components/testHOC2/Loading';
import WithLoadingIndicator from './components/testHOC2/WithLoadingIndicator';
import Counter2 from './components/TestRedux/Counter2';
import { counterStore2 } from './components/TestRedux/storeCounter';


function App() {
  // пример для context
  const lightTheme = { background: 'lightgray', color: 'black' };
  const darkTheme = { background: 'black', color: 'white' };

  const [theme, setTheme] = useState(lightTheme);

  const [isLoading, setIsLoading] = useState(true);
  const NewLoading = WithLoadingIndicator(Loading, isLoading);

  setTimeout(() => {
    setIsLoading((prev) => !prev)
  }, 1000);

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
        <Provider store={counterStore}>
          {/* без провайдера не будет работать стор */}
          <Counter />
        </Provider>
      </div>

      <div className='App'>
        <div>Загрузка через HOC</div>
        <NewLoading />
      </div>

      <div className='App'>
        <Provider store={counterStore2}>
          <Counter2 />
        </Provider>
      </div>


    </>
  );
}

export default App;