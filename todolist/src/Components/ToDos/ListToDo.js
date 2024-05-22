import './ListToDo.css';
import Elemento from '../Elemento/Elemento';

function ListToDo({ setToDo, ToDo }) {
    let i = -1;
    return <div className='ToDos'>
        {   
            ToDo?.map(t => {
            i++
            return (
                <Elemento id={i} contenido={t.contenido} tachado={t.tachado} fechaYhoraCreacion={t.fechaYhoraCreacion} fechaYhoraTachado={t.fechaYhoraTachado} setCitas={setToDo} citas={ToDo}></Elemento>)
            })
        }
    </div>;
}

export default ListToDo;