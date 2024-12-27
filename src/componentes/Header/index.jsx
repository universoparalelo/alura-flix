import BotonConContorno from "../BotonConContorno";
import { CiHome } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

const Header = () => {
    // fijarse si estamos en un tamaño de pantalla pequeño


    return (
        <header className="z-50 fixed inset-x-0 bottom-0 flex p-4 justify-between items-center bg-[rgba(0,0,0,1)] border-b-4 border-blue-700 shadow-[0px_0px_10px_13px_rgba(0,0,255,0.7)] md:static">
            <img src="/logo.png" alt="logo de aluraflix" className="hidden md:block"/>
            <div className="flex gap-4 justify-center w-full md:justify-end">
                <BotonConContorno color="blue" ruta="/" Icon={CiHome}>HOME</BotonConContorno>
                <BotonConContorno color="green" ruta="nuevo-video" Icon={FaPlus}>NUEVO VIDEO</BotonConContorno>
            </div>
        </header>
    )
}

export default Header;