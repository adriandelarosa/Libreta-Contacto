import axios from 'axios'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'



const URI = 'http://localhost:8000/telefono/'
const URI2 = 'http://localhost:8000/tipo/'



const CompCreateTelefono = () => {
    const [numero, setnota] = useState('')
    const navigate = useNavigate()
    const {contactoID} = useParams()
    const [tipos, settipo] = useState([])
    const [tipoID, settipoID] = useState()


    useEffect( ()=>{
        gettpall()
    },[])

    const gettpall = async () => {
        const res = await axios.get(URI2+'all')
        settipo(res.data)
    }
    
   
    //// PROCEDIMIENTOS PARA ACTUALIZAR ////
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {numero: numero, contactoID:contactoID, tipoID:tipoID})
        navigate('/')
    }

 
	return (
		<div className='container'>
            <div className='row'>
            <div className='col'>
			<h2>Crear telefono</h2>
            <form onSubmit={store}>
                
            <div className='d-flex flex-row justify-content-center'>
                    <div className='col-md-6 mb-2'>
                        <label className='form-label'>NUMERO:</label>
                        <input value={numero}
                        onChange={(e)=>setnota(e.target.value)}
                        type="text"
                        className='form-control'>
                        </input>                    
                    </div>
    
                    <div className='col-6 mb-2'>
                    <label className='form-label'>TIPO DE TELEFONO:</label> 
                    <br></br>
                    <select className='form-control' onChange={(e)=>settipoID(e.target.value)}>
                        <option >Selecione un grupo</option>
                        { tipos.map ( (tipo) => (
                        <option key={tipo.id} value={tipo.id}> {tipo.nombre}</option>               
                    ) )}
                    </select>          
                    </div>
                </div>
                <br></br>
                <button type='submit' className='btn btn-info'><i className="fa-solid fa-user-plus"></i> Agregar Nota</button>

            </form>
		</div>
        </div>
        </div>
	)
}

export default CompCreateTelefono