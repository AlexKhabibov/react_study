import './App.css';
import Counter from './components/Counter';
import CurrentTime from './components/CurrentTime';
import FetchRandomUser from './components/FetchRandomUser';
import Form from './components/Form';
import Greeting from './components/greeting';
import ShowText from './components/ShowText';

function App() {

  return (
    <>
    <Greeting />
    <CurrentTime/>
    <Counter/>
    <ShowText dataText='Hello'/>
    <Form/>
    <FetchRandomUser/>
    </>
  );
}

export default App;