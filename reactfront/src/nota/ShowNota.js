import axios from 'axios'
import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'


const URI = 'http://localhost:8000/nota/'


const CompShowNota = ()=>{
    const [notas, setnotas] = useState([])
    const {contactoID} = useParams()
   
    useEffect( ()=>{
            getNotasByConta()
        },[])

    //// PROCEDIMIENTO PARA OBTENER NOTAS POR CONTATOS ////
    const getNotasByConta = async (e) => {
       const res = await axios.get(`${URI}contactos/${contactoID}/notas`)
        setnotas(res.data)
    }

    //// PROCEDIMIENTO PARA ELIMINAR UN CONTACTO ////
    const deleteNotas = async (id)=>{
        await axios.delete(`${URI}${id}`)
        getNotasByConta()        
    }


    return(

        <div className='container'>
                <div className='row'>
                    <div className='col'>
                    <Link to={`/notas/create/${contactoID}`} className="btn btn-warning btn-lg m-2" ><i className="fa-solid fa-user-plus"></i> Crear nota</Link>

                        <table className='table table-borderless'>
                            <thead className='table-dark'>
                                <tr>
                                    <th>ID</th>
                                    <th>NOTA</th>
                                    <th>ACCIONES</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                            {notas.map ( (nota) => (      
                                <tr key={ nota.id }>
                                                <td> {nota.id}</td>
                                                <td> {nota.nota} </td>
                                                <td>
                                                    <Link to={`/notas/edit/${nota.id}`} className='btn btn-info btn-sm m-1' ><i className="fa-solid fa-pen-to-square"></i> Editar </Link>
                                                    <button onClick={ () => deleteNotas(nota.id)} className='btn btn-danger btn-sm'><i className="fa-solid fa-user-slash"></i> Eliminar </button>                                        
                                                </td>

                                                </tr>                              
                                        ) )}

                                

                            </tbody>    
                        </table>
                        
                    </div>
                </div>
                
            </div>
            )
          }
        

export default CompShowNota