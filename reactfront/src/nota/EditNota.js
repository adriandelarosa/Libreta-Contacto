import axios from 'axios'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'



const URI = 'http://localhost:8000/nota/'


const CompEditNota = () => {
    const [nota, setnota] = useState('')
    const navigate = useNavigate()
    const {notaID} = useParams()
    
    useEffect( ()=>{
        getNotaP()
    },[])

    //// PROCEDIMIENTOS PARA ACTUALIZAR ////
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+notaID, {nota: nota})
        navigate('/')
    }

    const getNotaP = async () => {
        const res = await axios.get(URI+notaID)
        setnota(res.data.nota)
    }

	return (
		<div className='container'>
            <div className='row'>
            <div className='col'>
			<h2>Editar Contacto</h2>
            <form onSubmit={update}>
                
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
                <button type='submit' className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i> Editar </button>

            </form>
		</div>
        </div>
        </div>
	)
}

export default CompEditNota