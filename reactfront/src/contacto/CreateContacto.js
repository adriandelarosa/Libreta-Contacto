import axios from 'axios'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


const URI = 'http://localhost:8000/contacto/'
const URI2 = 'http://localhost:8000/grupo/'

const CompCreateConta = () => {
    const [nombre, setnombre] = useState('')
    const [apellidos, setapellidos] = useState('')
    const [correo, setcorreo] = useState('')
    const [direccion, setdireccion] = useState('')
    const [grupoID, setgrupoID] = useState()
    const [grupos, setgrupos] = useState([])
    const navigate = useNavigate()

    useEffect( ()=>{
        getgpall()
    },[])

    const getgpall = async () => {
        const res = await axios.get(URI2+'all')
        setgrupos(res.data)
    }

    //// PROCEDIMIENTOS ////
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombre: nombre, apellidos:apellidos, correo: correo, direccion:direccion, grupoID:grupoID})
        navigate('/')
    }


	return (
		<div className='container'>
            <h2>Crear Contacto</h2>
            <form onSubmit={store}>

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
                    <select className='form-control' onChange={(e)=>setgrupoID(e.target.value)}>
                        <option >Selecione un grupo</option>
                        { grupos.map ( (gp) => (
                        <option key={gp.id} value={gp.id}> {gp.nombre}</option>               
                    ) )}
                    </select>          
                    </div>
                </div>

                <br></br>
                <button type='submit' className='btn btn-info'>STORE</button>

            </form>
		</div>

        
	)
}

export default CompCreateConta