import { useContext } from "react";
import { GlobalContext } from "../../context";
import { MdOutlineDeleteForever } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";

const Card = ({ id, titulo, imagen, color, categoria, descripcion, video}) => {
    const { obtenerVideo, setModal, eliminarVideo} = useContext(GlobalContext);

    return (
        <div className="min-w-[330px] rounded-[1rem] cursor-pointer">
            <div style={{ backgroundImage: `url(${imagen})` }} className={`min-h-[200px] bg-cover bg-center w-full`}></div>
            <div style={{ boxShadow: `inset 0px 0px 10px 3px ${color}` }} className={`flex justify-evenly bg-black p-6 text-white rounded-b-[1rem]`}>
                <div className="font-bold flex gap-1 items-center"
                    onClick={()=> eliminarVideo(id)}    
                >
                    <MdOutlineDeleteForever size="32" />
                    Eliminar
                </div>
                <div 
                    className="font-bold flex gap-1 items-center"
                    onClick={()=>{
                        obtenerVideo({ id, titulo, imagen, categoria, descripcion, video});
                        setModal(true)
                    }}
                >
                    <RiEditLine size="32"/>
                    Editar
                </div>
            </div>
        </div>
)}

export default Card;
