import BotonConContorno from "../BotonConContorno";

const Header = () => {
    return (
        <header className="flex p-6 justify-between items-center bg-[rgba(0,0,0,.9)] border-b-4 border-blue-700 shadow-[0px_0px_10px_13px_rgba(0,0,255,0.7)]">
            <img src="/logo.png" alt="logo de aluraflix"/>
            <div className="flex gap-4 ">
                <BotonConContorno color="blue" ruta="/">HOME</BotonConContorno>
                <BotonConContorno color="green" ruta="nuevo-video">NUEVO VIDEO</BotonConContorno>
            </div>
        </header>
    )
}

export default Header;