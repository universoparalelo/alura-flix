import { useContext } from "react";
import { GlobalContext } from "../../context";

const Boton = ({texto, color}) => {
    const {cambiarSeccion} = useContext(GlobalContext);
    
    return <button 
        className="text-white font-bold py-2 px-6 rounded-[1rem] text-[2rem] my-4" 
        style={{backgroundColor: color}}
        value={texto}
        onClick={(e) => cambiarSeccion(e.target.value)}
        >
            {texto}
        </button>
}

export default Boton;