import './ListToDo.css';
import Elemento from '../Elemento/Elemento';

function ListToDo({ setToDo, ToDos }) {

    return (
     <div className='ToDoS'>
            {   
                ToDos.map(t => {
                    return (<Elemento id={t.id} contenido={t.contenido} tachado={t.tachado} setToDo={setToDo} ToDos={ToDos}></Elemento>)
                }
            )}
    </div>

    );
    
}

export default ListToDo;