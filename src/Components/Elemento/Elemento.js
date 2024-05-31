import './Elemento.css';

function Elemento({ contenido}) {
    return (
        <div><label>{contenido}</label></div>
    
    );
}
// onclick={borrar(`D${id}`, id)}
// onclick={tachar(id)}
export default Elemento;