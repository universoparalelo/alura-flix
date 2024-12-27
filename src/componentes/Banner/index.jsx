import { useContext } from "react";
import Boton from "../Boton";
import { GlobalContext } from "../../context";

const Banner = () => {
    const { seccion } = useContext(GlobalContext);

    return (
        <section 
            style={{ backgroundImage: `url(${seccion.capa})` }} 
            className="relative opacity-90 bg-cover bg-center h-[400px] flex flex-col justify-evenly items-center px-20 gap-3 md:flex-row md:gap-7"
        >
            <div className="absolute inset-0 bg-black opacity-50"></div> 

            <div className="text-white z-10 w-full text-center md:text-left">
                <Boton texto={seccion.titulo} color={seccion.color} />
                <h3 className="text-[2rem]">Challenge React</h3>
                <span className="text-[1rem] font-thin hidden md:block">
                    Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                </span>
            </div>

            <img 
                src={seccion.imagen} 
                alt="portada de frontend" 
                className="z-10 rounded-[1rem] w-full md:w-1/2"
            />
        </section>
    );
};

export default Banner;
