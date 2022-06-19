import axios from 'axios'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import CompShowTipo from '../tipo/ShowTipo'



const URI = 'http://localhost:8000/telefono/'
const URI3 = 'http://localhost:8000/contacto/'



const EliminarTele = () => {
    const navigate = useNavigate()
    const {contactoID} = useParams()
    const [telefonos, setTelefono] = useState([])
   
    useEffect( ()=>{
        getTelefonosBycont()
        },[])

    //// PROCEDIMIENTO PARA OBTENER UN GRUPO ESPECIFICO ////
    const getTelefonosBycont = async () => {
        const res = await axios.get(`${URI3}${contactoID}/numeros`)
        setTelefono(res.data)
        
    }

    
    //// PROCEDIMIENTOS PARA ELIMINAR ////
  
    const deleteTelefono = async (id)=>{
        await axios.delete(`${URI}${id}`)
        navigate('/')    
    }

 
	return (
		<div className='container'>
            <div className='row'>
            <div className='col'>
			<h2>Eliminar telefono {contactoID}</h2>
            <table className='table table-borderless'>
            <thead className='table-dark'>
                            <tr>
                                <th>NUMERO</th>
                                <th>TIPO</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
        <tbody>
                            {telefonos.map ( (telefono) => (
                                
                                <tr key={ telefono.id}>
                                    <td> {telefono.numero} </td>
                                    <td> <CompShowTipo tipoID={telefono.tipoID} /> </td>
                                    <td> <button onClick={ () => deleteTelefono(telefono.id)} className='btn btn-danger btn-sm '><i class="fa-solid fa-phone-slash"></i> Eliminar Telefono  </button> </td>
                                </tr>
                            ) )}

                        </tbody>
                    </table>
		</div>
        </div>
        </div>
	)
}

export default EliminarTele