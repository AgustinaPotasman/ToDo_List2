import './Elemento.css';

function Elemento({ id, contenido, tachado, fechaYhoraCreacion, fechaYhoraTachado, ToDo, setToDo }) {
    let checkboxId = "C" + id;
    let pequeElemento = "L"+ id;
    let elemento = "S" + id;
    let basura = "B" + id;

    const tachar = (id) => {
        const misToDos = ToDo;
        const elemento = misToDos[id];
        const checkbox = document.getElementById(`C${elemento.id}`);
        checkbox.onchange = () => {
            const myElement = document.getElementById(`${elemento.id}`);
            if(checkbox.checked){
                elemento.tachado = true;
                elemento.fechaYhoraTachado = new Date();
                myElement.classList.add("tachado");
            } else {
                elemento.tachado = false;
                elemento.fechaYhoraTachado = false;
                myElement.classList.remove("tachado");
            }
            setToDo(...misToDos);
        }
    }

    return  (
    <div class="pequeElemento" id={pequeElemento}>
        <div class="elemento" id={elemento}>
            <input type="checkbox" class="myCheckbox" id={checkboxId} onclick={tachar(id)}/>
            <label>{contenido}</label>
        </div>
        <div class="basura">
            <img src="trash-solid.svg" id={basura} onclick="borrar(D${ToDoS[i].id}, ${i})"/>
        </div>
        </div>);
}

export default Elemento;