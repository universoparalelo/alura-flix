import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useContext, useState } from 'react';
import { GlobalContext } from '../../context';
import "./page.css";
import { v4 as uuidv4 } from 'uuid';
import BotonForm from './BotonForm';
import { FormControl, FormHelperText } from '@mui/material';

const Formulario = ({tituloForm}) => {
    const { videoSeleccionado, editarVideo, modal, crearVideo } = useContext(GlobalContext);
    let video = modal ? videoSeleccionado : {titulo: '', categoria: '', imagen: '', video: '', descripcion: ''};
    const [titulo, setTitulo] = useState(video.titulo);
    const [categoria, setCategoria] = useState(video.categoria);
    const [imagen, setImagen] = useState(video.imagen);
    const [videoRef, setVideoRef] = useState(video.video);
    const [descripcion, setDescripcion] = useState(video.descripcion);
    const [errors, setErrors] = useState({
        titulo:{
          error: false,
          message: "Deben ser al menos 3 caracteres"
        },
        categoria:{
          error: false,
          message: "Deben elegir una por lo menos"
        },
        imagen:{
          error: false,
          message: "Deben ser al menos 5 caracteres"
        },
        video:{
          error: false,
          message: "Deben ser al menos 10 caracteres"
        },
        descripcion:{
          error: false,
          message: "Deben ser al menos 10 caracteres"
        }
    })
    
    const limpiarFormulario = () => {
        setTitulo('')
        setCategoria(null)
        setImagen('')
        setVideoRef('')
        setDescripcion('')
    }

    const validarTitulo = () => {
        titulo.length < 3 && titulo.length > 0
            ? setErrors({...errors, titulo: { error: true, message: "Deben ser al menos 3 caracteres"} }) 
            : setErrors({...errors, titulo: { error: false, message: "Deben ser al menos 3 caracteres"} });
    }
    const validarCategoria = () => {
        categoria.length <= 0
            ? setErrors({...errors, categoria: { error: true, message: "Debe seleccionar una opcion"} }) 
            : setErrors({...errors, categoria: { error: false, message: "Debe seleccionar una opcion"} });
    }
    const validarImagen = () => {
        imagen.length < 5 && imagen.length > 0
            ? setErrors({...errors, imagen: { error: true, message: "Deben ser al menos 5 caracteres"} }) 
            : setErrors({...errors, imagen: { error: false, message: "Deben ser al menos 5 caracteres"} });
    }
    const validarVideo = () => {
        videoRef.length < 10 && videoRef.length > 0
            ? setErrors({...errors, video: { error: true, message: "Deben ser al menos 10 caracteres"} }) 
            : setErrors({...errors, video: { error: false, message: "Deben ser al menos 10 caracteres"} });
    }
    const validarDescripcion = () => {
        descripcion.length < 10 && descripcion.length > 0
            ? setErrors({...errors, descripcion: { error: true, message: "Deben ser al menos 10 caracteres"} }) 
            : setErrors({...errors, descripcion: { error: false, message: "Deben ser al menos 10 caracteres"} });
    }

    return (
        <>
        <form className='flex flex-col gap-6 my-4 w-[90%] mx-auto text-white'
            onSubmit={(e)=> {
                e.preventDefault();

                if (modal){
                    //caso que sea un video a editar
                    video = {id: videoSeleccionado.id, titulo, categoria, imagen, videoRef, descripcion};
                    editarVideo(video);
                } else {
                    //caso que sea un video nuevo
                    const id = uuidv4();
                    video = {id, titulo, categoria, imagen, videoRef, descripcion};
                    crearVideo(video);
                }
        }}>
            <h1 className='text-[2rem] font-bold text-[#2271D1]'>{tituloForm}</h1>
            <div>
                <label>Titulo:</label>
                <TextField 
                    onChange={(e)=>setTitulo(e.target.value)} 
                    id="outlined-basic" 
                    className='input-estilos' 
                    variant="outlined" 
                    focused 
                    value={titulo}
                    onBlur={validarTitulo}
                    error={errors.titulo.error}
                    helperText={errors.titulo.error && errors.titulo.message}
                    required
                />
            </div>
            <div>
                <label>Categoria</label>
                <FormControl 
                    variant="outlined" 
                    className='input-estilos w-full'
                    error={errors.categoria.error} // Indica el estado de error.
                    required
                >
                    <Select
                        labelId="demo-simple-select-label"
                        className="border-2 border-blue-600 rounded-lg"
                        id="demo-simple-select"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        onBlur={validarCategoria}
                        focused="true"
                    >
                        <MenuItem value="">Seleccione uno</MenuItem>
                        <MenuItem value="Front end">Front end</MenuItem>
                        <MenuItem value="Back end">Back end</MenuItem>
                        <MenuItem value="Innovacion y gestion">Innovacion y gestion</MenuItem>
                    </Select>
                    <FormHelperText>
                        {errors.categoria.error && errors.categoria.message}
                    </FormHelperText>
                </FormControl>

            </div>
            <div>
                <label >Imagen</label>
                <TextField 
                    className='input-estilos'
                    id="outlined-basic" 
                    variant="outlined"
                    onChange={(e)=>setImagen(e.target.value)}
                    value={imagen}
                    onBlur={validarImagen}
                    error={errors.imagen.error}
                    helperText={errors.imagen.error && errors.imagen.message}
                    focused
                />
            </div>
            <div>
                <label >Video</label>
                <TextField 
                    className='input-estilos'
                    id="outlined-basic" 
                    variant="outlined" 
                    onChange={(e)=>setVideoRef(e.target.value)}
                    value={videoRef}
                    onBlur={validarVideo}
                    error={errors.video.error}
                    helperText={errors.video.error && errors.video.message}
                    focused
                />
            </div>
            <div>
                <label>Descripcion</label>
                <TextField
                    id="filled-multiline-static"
                    multiline
                    rows={4}
                    className='input-estilos'
                    variant="filled"
                    onChange={(e)=>setDescripcion(e.target.value)}
                    value={descripcion}
                    onBlur={validarDescripcion}
                    error={errors.descripcion.error}
                    helperText={errors.descripcion.error && errors.descripcion.message}
                    focused
                    required
                />
            </div>
            <div className='flex flex-col justify-evenly gap-4 w-[70%] mx-auto md:flex-row md:w-full'>
                <BotonForm tipo="submit">GUARDAR</BotonForm>
                <BotonForm tipo="button" funcion={limpiarFormulario}>LIMPIAR</BotonForm>
            </div>
        </form>
        </>
    )
}

export default Formulario;