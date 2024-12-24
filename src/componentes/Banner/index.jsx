import { useContext } from "react";
import Boton from "../Boton";
import { GlobalContext } from "../../context";

const Banner = () => {
    const { seccion } = useContext(GlobalContext);

    return (
        <section 
            style={{ backgroundImage: `url(${seccion.capa})` }} 
            className="relative opacity-90 bg-cover bg-center h-[800px] flex flex-col justify-between items-center px-20 py-10 gap-5 md:flex-row"
        >
            <div className="absolute inset-0 bg-black opacity-50"></div> 

            <div className="text-white z-10 w-full md:w-[50%] text-center md:text-left">
                <Boton texto={seccion.titulo} color={seccion.color} />
                <h3 className="text-[3rem] mt-8">Challenge React</h3>
                {/* Cambia la visibilidad del texto en diferentes tamaños de pantalla */}
                <span className="text-[1.5rem] font-thin md:block hidden">
                    Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                </span>
            </div>

            <img 
                src={seccion.imagen} 
                alt="portada de frontend" 
                className="z-10 rounded-[1rem] w-full"
            />
        </section>
    );
};

export default Banner;
