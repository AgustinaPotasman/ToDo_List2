import Boton from '../Boton/Boton';
import Input from '../Input/Input';
import './NuevoToDo.css';

function NuevoToDo({ToDos, setToDos}) {

  const agregarToDo = (e) => {
    e.preventDefault();
      setToDos([...ToDos, {
        contenido: e.target.contenido.value,
        tachado: false,
        fechaYhoraCreacion: new Date(),
        fechaYhoraTachado: false
      }]);
  }

  return (<>
  <form className='NuevoToDo' onSubmit={agregarToDo} autoComplete="off">
      <Input sendText={"Escribe algo que tengas que hacer..."} name="contenido"/>
      <Boton sendText={"Agregar tarea"}/>
  </form>
  </>)
}

export default NuevoToDo;