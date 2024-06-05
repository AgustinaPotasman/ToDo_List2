import './ListToDo.css';
import Elemento from '../Elemento/Elemento';

function ListToDo({ setToDo, ToDos }) {
/**/
    let i = -1;
    return (
        <div className=''>
                {   
                    ToDos.map((t) => {
                        i++;
                        return (
                            <Elemento isEven={(i % 2 === 0)} contenido={t.contenido} tachado={t.tachado} setToDo={setToDo} ToDos={ToDos}></Elemento>
                        )
                    }
                )}
        </div>
    );
    
}

export default ListToDo;