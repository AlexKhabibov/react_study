import Button from '@mui/material/Button';

import './App.css';
import Counter from './components/Counter';
import CurrentTime from './components/CurrentTime';
import FetchRandomUser from './components/FetchRandomUser';
import SetModal from './components/SetModal';
import Form from './components/Form';
import FormInput from './components/FormInput';
import FormInput2 from './components/FormInput2';
import Greeting from './components/greeting';
import MessageList from './components/MessageList';
import ShowText from './components/ShowText';
import TemperatureConverter from './components/TempConvrter';
import TextDisplayForm from './components/TextDisplayForm';
import ThemeSwitcher from './components/ThemeSwitcher';
import Timer from './components/Timer';
import TodoList from './components/TodiList';
import TodoList2 from './components/TodoList2';
import Toggle from './components/Toggle';
import TestComp from './components/Test';

function App() {

  return (
    <>
      <TodoList2 />
      <TemperatureConverter />
      <FormInput />
      <Greeting />
      <Greeting name='fgsd' />
      <CurrentTime />
      <Counter />
      <ShowText dataText='Hello' />
      <Form />
      <FetchRandomUser />
      <Timer />
      <TodoList />
      <FormInput2 />

      <SetModal />

      <MessageList />
      <ThemeSwitcher />

      <TextDisplayForm />

      <Greeting>
        <p>hello children</p>
      </Greeting>

      <Toggle>
        {({ isOn, toggle }) => (
          <Button
            variant='contained'
            onClick={toggle}>{isOn ? "Вкл" : "Выкл"}
          </Button>
        )}
      </Toggle>

      <TestComp render={(data) => (
        <div>{data}</div>
      )} />
    </>
  );
}

export default App;