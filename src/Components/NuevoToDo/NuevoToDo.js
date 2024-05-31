import Boton from '../Boton/Boton';
import Input from '../Input/Input';
import './NuevoToDo.css';
import { useEffect } from 'react';

function NuevoToDo({ToDos, setToDos}) {
  const agregarToDo = (e) => {
      let newId = (isNaN(ToDos.lenght)) ? "e1" : e + (ToDos.lenght + 1)
      useEffect(() => {
      setToDos([...ToDos, {
        id: newId,
        contenido: e.target.content.value,
        tachado: false,
        fechaYhoraCreacion: new Date(),
        fechaYhoraTachado: false
      }]);
    }, [])
  }

  return (<form className='NuevoToDo' onSubmit={() => agregarToDo}>
      <Input sendText={"Escribe algo que tengas que hacer..."} name="content"></Input>
      <Boton sendText={"Agregar tarea"}></Boton>
  </form>)
}

export default NuevoToDo;