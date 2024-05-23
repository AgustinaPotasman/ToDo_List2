import './Elemento.css';

function Elemento({ id, contenido, tachado, ToDos, setToDo }) {
    return  (
    <div class="ToDo" id={`T${id}`}>
        <div class="checkbox-container" id={`Check${id}`}>
            <input type="checkbox" className="checkbox-container__myCheckbox" id={`myCheck${id}`}/>
            <label>{contenido}</label>
        </div>
    </div>
    );
}
// onclick={borrar(`D${id}`, id)}
// onclick={tachar(id)}
export default Elemento;