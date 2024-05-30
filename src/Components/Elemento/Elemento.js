import './Elemento.css';

function Elemento({ id, contenido, tachado, ToDos, setToDo }) {
    return  <label key={id}>{contenido}</label>;
}
// onclick={borrar(`D${id}`, id)}
// onclick={tachar(id)}
export default Elemento;