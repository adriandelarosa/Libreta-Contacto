import axios from 'axios'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import CompShowGrupo from '../grupo/Showgrupo'


const URI = 'http://localhost:8000/contacto/'
const URI2 = 'http://localhost:8000/grupo/'

const CompEditConta = () => {
    const [nombre, setnombre] = useState('')
    const [apellidos, setapellidos] = useState('')
    const [correo, setcorreo] = useState('')
    const [direccion, setdireccion] = useState('')
    const [grupoID, setgrupoID] = useState()
    const [grupos, setgrupos] = useState([])
    const navigate = useNavigate()
    const {id} = useParams()
    
    useEffect( ()=>{
        getgpall()
        getContaByid()
    },[])

    const getgpall = async () => {
        const res = await axios.get(URI2+'all')
        setgrupos(res.data)
    }

    //// PROCEDIMIENTOS PARA ACTUALIZAR ////
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {nombre: nombre, apellidos:apellidos, correo: correo, direccion:direccion, grupoID:grupoID})
        navigate('/')
    }

    const getContaByid = async () => {
        const res = await axios.get(URI+id)
        setnombre(res.data.nombre)
        setapellidos(res.data.apellidos)
        setcorreo(res.data.correo)
        setdireccion(res.data.direccion)
        setgrupoID(res.data.grupoID)
    }

	return (
		<div className='container'>
            <div className='row'>
            <div className='col'>
			<h2>Editar Contacto</h2>
            <form onSubmit={update}>
                
            <div className='d-flex flex-row justify-content-center'>
                    <div className='col-md-6 mb-2'>
                        <label className='form-label'>NOMBRE DE CONTACTO:</label>
                        <input value={nombre}
                        onChange={(e)=>setnombre(e.target.value)}
                        type="text"
                        className='form-control'>
                        </input>                    
                    </div>

                    <div className='col-md-6 mb-2'>
                        <label className='form-label'>APELLIDOS DE CONTACTO:</label>
                        <input value={apellidos}
                        onChange={(e)=>setapellidos(e.target.value)}
                        type="text"
                        className='form-control'>
                        </input>
                    </div>
                </div>

                <div className='row'>
                    <div className='col mb-2'>
                        <label className='form-label'>CORREO DE CONTACTO:</label>
                        <input value={correo}
                        onChange={(e)=>setcorreo(e.target.value)}
                        type="text"
                        className='form-control'>
                        </input>                 
                    </div>
                </div>

                <div className='row'>
                    <div className='col mb-2'>
                        <label className='form-label'>DIRECCION DE CONTACTO:</label>
                        <input value={direccion}
                        onChange={(e)=>setdireccion(e.target.value)}
                        type="text"
                        className='form-control'>
                        </input>                 
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col-6 mb-2'>
                    <label className='form-label'>GRUPO DE CONTACTO:</label> 
                    <br></br>
                    <select value={grupoID} className='form-control' onChange={(e)=>setgrupoID(e.target.value)}>
                        { grupos.map ( (gp) => (
                            <option key={gp.id} value={gp.id}> {gp.nombre}</option>               
                        ) )}
                    </select>          
                    </div>
                </div>

                <br></br>
                <button type='submit' className='btn btn-info'><i className="fa-solid fa-pen-to-square "></i> Editar</button>

            </form>
		</div>
        </div>
        </div>
	)
}

export default CompEditConta