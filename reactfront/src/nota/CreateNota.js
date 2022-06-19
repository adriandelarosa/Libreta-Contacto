import axios from 'axios'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'



const URI = 'http://localhost:8000/nota/'


const CompCreateNota = () => {
    const [nota, setnota] = useState('')
    const navigate = useNavigate()
    const {contactoID} = useParams()
    
   
    //// PROCEDIMIENTOS PARA ACTUALIZAR ////
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nota: nota, contactoID:contactoID})
        navigate('/')
    }

 
	return (
		<div className='container'>
            <div className='row'>
            <div className='col'>
			<h2>Crear Contacto</h2>
            <form onSubmit={store}>
                
            <div className='d-flex flex-row justify-content-center'>
                    <div className='col-md-6 mb-2'>
                        <label className='form-label'>NOTA:</label>
                        <input value={nota}
                        onChange={(e)=>setnota(e.target.value)}
                        type="text"
                        className='form-control'>
                        </input>                    
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

export default CompCreateNota