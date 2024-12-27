import { Link } from "react-router-dom";

const BotonConContorno = ({ children, ruta, Icon }) => {

    return (
        <Link to={ruta} className={`text-white py-3 px-9 border-2 border-white font-bold rounded-lg hover:text-blue-500 hover:shadow-[inset_0px_0px_10px_3px_rgba(0,0,255,0.7)] hover:border-blue-500 flex gap-5 items-center`}>
            <Icon size={28} className="md:hidden"/>
            {children}
        </Link>
    )
}

export default BotonConContorno;