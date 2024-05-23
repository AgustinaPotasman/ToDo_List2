import Boton from '../Boton/Boton';
import Texto from '../Texto/Texto';
import './TareaMasRapida.css';

function TareaMasRapida(ToDos) {
    const mostrarMasRapida = () => {
        
    }
    return <div className='TareaMasRapida'>
        <Boton sendText={"Ver tarea terminada mas rapida"} onclick={mostrarMasRapida}></Boton>
        <Texto sendText=''></Texto>
    </div>
}

export default TareaMasRapida;