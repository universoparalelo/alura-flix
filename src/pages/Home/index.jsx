import { useContext } from "react";
import Banner from "../../componentes/Banner";
import Seccion from "../../componentes/Seccion";
import { GlobalContext } from "../../context";

const Home = () => {
    const {secciones} = useContext(GlobalContext);

    return (
        <>
            <Banner />
            <div className="flex flex-col gap-6">
                {secciones.map(seccion =>
                    <Seccion key={seccion.id} nombre={seccion.titulo} color={seccion.color} />
                )}
            </div>
        </>
    );
}

export default Home;