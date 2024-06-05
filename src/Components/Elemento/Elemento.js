import './Elemento.css';
import trash from "../../../public/trash-solid.svg";

function Elemento({ isEven, contenido, tachado, setToDo, ToDos}) {
    const esTachado = (tachado) => { return tachado === true }
    const esPar = (isEven) => { if (isEven === true) {return "#f1f1f1"} else {return "#ffffff"}}
    const tachar = () => {
        
    }
    return (
        <div className='elemento' style={{backgroundColor: esPar(isEven)}}>
            <div className='elemento_content'>
                <input type="checkbox" defaultchecked={esTachado(tachado)} onChange={tachar}/>
                <label>{contenido}</label>
            </div>
            <img src={trash}/>
        </div>
    
    );
}
// onclick={borrar(`D${id}`, id)}
// onclick={tachar(id)}
export default Elemento;