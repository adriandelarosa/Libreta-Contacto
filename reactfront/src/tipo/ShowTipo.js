import axios from 'axios'
import {useState, useEffect} from 'react'

const URI = 'http://localhost:8000/tipo/'


const CompShowTipo = (props)=>{
    const [tipo, setTipo] = useState([])
    const tipoID = props.tipoID
    useEffect( ()=>{
            getTipoByid()
        },[])

    //// PROCEDIMIENTO PARA OBTENER UN GRUPO ESPECIFICO ////
    const getTipoByid = async () => {
        const res = await axios.get(URI+tipoID)
        setTipo(res.data)
    }

    return(
        <p>{tipo.nombre}</p>
        )
}

export default CompShowTipo
