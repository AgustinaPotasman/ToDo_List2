//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Titulo from './Components/Titulo/Titulo';
import ListToDo from './Components/ToDos/ListToDo';
import NuevoToDo from './Components/NuevoToDo/NuevoToDo';

function App() {
  const [ToDos, setToDos] = useState([]);

  return (
    <div className="App">
      <Titulo sendText={"To Do"}></Titulo>
      <ListToDo setToDos={setToDos} ToDos={ToDos}></ListToDo>
      <NuevoToDo></NuevoToDo>
    </div>
  );
}

export default App;
