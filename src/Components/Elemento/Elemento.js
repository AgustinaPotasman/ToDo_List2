import './Elemento.css';
import { useState } from 'react';

function Elemento({ id, isEven, contenido, tachado, setToDo, ToDos}) {
    const [className, setClassName] = useState("");

    const esTachado = (tachado) => { return tachado === true }
    const esPar = (isEven) => { if (isEven === true) {return "#f1f1f1"} else {return "#dbdbdb"}}
    const tachar = () => {
        const newToDo = ToDos;
        newToDo[id].tachado = (newToDo[id].tachado === true) ? false : true;
        if(newToDo[id].tachado) {
            newToDo[id].fechaYhoraTachado = new Date();
            setClassName("tachado");
        }else{
            setClassName("");
        }
        setToDo(newToDo);
        return true;
    }

    return (
        <div className='elemento' style={{backgroundColor: esPar(isEven)}}>
            <div className={`elemento_content ${className}`}>
                <input type="checkbox" defaultchecked={esTachado(tachado)} onChange={tachar}/>
                <label >{contenido}</label>
            </div>
            <img src={require('../../trash-solid.svg').default} alt="Borrar elemento" className='trash'/>
        </div>
    
    );
}
// onclick={borrar(`D${id}`, id)}
// onclick={tachar(id)}
export default Elemento;