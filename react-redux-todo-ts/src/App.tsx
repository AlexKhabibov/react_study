import './App.css';
import TodoApp from './components/toDoApp';
import { store } from './store/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoApp />
      </Provider>

    </div>
  );
}

export default App;
