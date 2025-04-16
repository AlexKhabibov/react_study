import './App.css';
import Counter from './components/Counter';
import CurrentTime from './components/CurrentTime';
import FetchRandomUser from './components/FetchRandomUser';
import Form from './components/Form';
import FormInput from './components/FormInput';
import Greeting from './components/greeting';
import ShowText from './components/ShowText';
import Timer from './components/Timer';
import TodoList from './components/TodiList';

function App() {

  return (
    <>
    <FormInput/>
    <Greeting />
    <CurrentTime/>
    <Counter/>
    <ShowText dataText='Hello'/>
    <Form/>
    <FetchRandomUser/>
    <Timer/>

    <TodoList/>
    </>
  );
}

export default App;