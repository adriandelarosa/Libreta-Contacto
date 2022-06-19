import axios from 'axios'
import {useState, useEffect} from 'react'

const URI = 'http://localhost:8000/grupo/'


const CompShowGrupo = (props)=>{
    const [grupos, setGrupo] = useState([])
    const id = props.id
    useEffect( ()=>{
            getGruposByid()
        },[])

    //// PROCEDIMIENTO PARA OBTENER UN GRUPO ESPECIFICO ////
    const getGruposByid = async () => {
        const res = await axios.get(URI+id)
        setGrupo(res.data)
    }

    return(
        <p>{grupos.nombre}</p>
        )
}



export default CompShowGrupo;



