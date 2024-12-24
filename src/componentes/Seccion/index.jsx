import { useContext } from "react";
import Boton from "../Boton";
import Card from "../Card";
import { GlobalContext } from "../../context";

const Seccion = ({ nombre, color }) => {
    const {videosDB} = useContext(GlobalContext);
    const videosFiltrados = videosDB.filter(video => video.categoria.toLowerCase() === nombre.toLowerCase());

    return ( <section>
        <Boton texto={nombre} color={color} />
        <article className="flex no-wrap overflow-x-auto gap-4 p-4">
            {videosFiltrados.map(video => (
                <Card 
                    key={video.id} 
                    titulo={video.titulo} 
                    imagen={video.imagen} 
                    color={color} 
                    categoria={video.categoria} 
                    descripcion={video.descripcion} 
                    video={video.video} 
                    id={video.id}
                />
            ))}
        </article>
    </section>
    )
}

export default Seccion;