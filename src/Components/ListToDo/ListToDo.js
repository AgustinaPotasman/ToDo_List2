import './ListToDo.css';
import Elemento from '../Elemento/Elemento';

function ListToDo({ setToDo, ToDos }) {
/*<Elemento id={i} contenido={t.contenido} tachado={t.tachado} setToDo={setToDo} ToDos={ToDos}></Elemento>*/
    return (
        <div className=''>
                {   
                    ToDos.map((t) => {
                        return (
                            <Elemento contenido={t.contenido}></Elemento>
                        )
                    }
                )}
        </div>
    );
    
}

export default ListToDo;