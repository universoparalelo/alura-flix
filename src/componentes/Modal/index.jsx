import { useContext } from "react"
import { GlobalContext } from "../../context"
import page from "./page.module.css"
import { IoIosCloseCircleOutline } from "react-icons/io";
import Formulario from "../Formulario";

const Modal = () => {
    const {videoSeleccionado, modal, setModal} = useContext(GlobalContext);

    return (
        modal &&
        <>
            <div className={page.overlay}></div>
            <dialog className={page.modal} open>
                <IoIosCloseCircleOutline color="white" size="32" onClick={()=>setModal(false)} className={page.close}/>
                <Formulario tituloForm="EDITAR UN VIDEO:"/>
            </dialog>
        </>
    )
}

export default Modal;