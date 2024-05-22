import Boton from '../Boton/Boton';
import './NuevoToDo.css';

function NuevoToDo() {
  return <div className='NuevoToDo'>
    <NuevoToDo sendText={"Escribe algo que tengas que haver"}></NuevoToDo>
    <Boton sendText={"Agregar"}></Boton>
  </div>
}

export default NuevoToDo;