import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [videosDB, setVideos] = useState([]);
    const [seccion, setSeccion] = useState({
        "id": 1,
        "titulo": "Front end",
        "capa": "bannerimg/bannerFE.png",
        "imagen": "bannerimg/playerFE.png",
        "color": "#6BD1FF"
    });
    const [secciones, setSecciones] = useState([]);
    const [videoSeleccionado, setVideoSeleccionado] = useState(null);
    const [modal, setModal] = useState(false);

    const editarVideo = (video) => {
        fetch(`http://localhost:3000/videos/${video.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(video),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                recargarVideos();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        setModal(false);
    }

    const crearVideo = (video) => {
        console.log(video);
        fetch(`http://localhost:3000/videos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(video),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                recargarVideos();

            })
            .catch((error) => {
                console.error('Error:', error);
            });
        setModal(false);
    }

    const obtenerVideo = ({ id, titulo, imagen, categoria, descripcion, video}) => {
        fetch(`http://localhost:3000/videos/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
        });
        setVideoSeleccionado({ id, titulo, imagen, categoria, descripcion, video});
    }

    const eliminarVideo = (id) => {
        fetch(`http://localhost:3000/videos/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                recargarVideos();

            })
            .catch((error) => {
                console.error('Error:', error);
        })
    } 

    const cambiarSeccion = (seccion) => {
        const seccionNueva = 
            secciones.find((seccionDB) => seccionDB.titulo.toLowerCase() === seccion.toLowerCase());
        setSeccion(seccionNueva);
    }

    const recargarVideos = async () => {
        const response = await fetch('http://localhost:3000/videos');
        const videosJSON = await response.json();
        setVideos(videosJSON);
    };
    

    useEffect(()=>{
        const obtenerVideos = async () => {
            const videos = await fetch('http://localhost:3000/videos');
            const videosJSON = await videos.json();
            setVideos(videosJSON);
        }
        const obtenerSecciones = async () => {
            const secciones = await fetch('http://localhost:3000/secciones');
            const seccionesJSON = await secciones.json();
            setSecciones(seccionesJSON);
        }
        obtenerVideos();
        obtenerSecciones();
    }, [])

    return (
        <GlobalContext.Provider value={{
            videosDB, 
            editarVideo, 
            videoSeleccionado, 
            setVideoSeleccionado, 
            modal, 
            setModal, 
            eliminarVideo,
            seccion,
            cambiarSeccion,
            crearVideo,
            secciones,
            obtenerVideo
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;