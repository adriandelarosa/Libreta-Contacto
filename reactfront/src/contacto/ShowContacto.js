import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import CompShowGrupo from '../grupo/Showgrupo'
import CompShowTelefonoBycont from '../telefono/ShowTelefono'




const URI = 'http://localhost:8000/contacto/all'
const URI2 = 'http://localhost:8000/contacto/'


const CompShowContactos = ()=>{
    const [contactos, setContacto] = useState([])
    useEffect( ()=>{
        getContatos()
    },[])

    //// PROCEDIMIENTO PARA MOSTRAR TODOS LOS CONTACTOS ////
    const getContatos = async ()=>{
        const res = await axios.get(URI)
        setContacto(res.data)
    }

    //// PROCEDIMIENTO PARA ELIMINAR UN CONTACTO ////
    const deleteContatos = async (id)=>{
        await axios.delete(`${URI2}${id}`)
        getContatos()        
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className="btn btn-dark btn-lg mb-3 " ><i className="fa-solid fa-user-plus"></i> Crear contacto</Link>
                    <table className='table table-borderless'>
                        <thead className='table-dark'>
                            <tr>
                                <th>NOMBRE COMPLETO</th>
                                <th>CORREO</th>
                                <th>DIRECCION</th>
                                <th>GRUPO</th>
                                <th>TELEFONO</th>
                                <th>NOTAS</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contactos.map ( (contacto) => (
                                <tr key={ contacto.id}>
                                    <td> {contacto.nombre} {contacto.apellidos}</td>
                                    <td> {contacto.correo} </td>
                                    <td> {contacto.direccion} </td>
                                    <td > <CompShowGrupo id={contacto.grupoID} /></td>
                                    <td > <CompShowTelefonoBycont contactoID={contacto.id} />
                                        <Link to={`/telefono/create/${contacto.id}`} className='btn btn-succes btn-sm  m-1'><i class="fa-solid fa-phone"></i> Agregar Telefono </Link>
                                        <Link to={`/telefono/eliminar/${contacto.id}`} className='btn btn-succes btn-sm  m-1'><i class="fa-solid fa-phone-slash"></i> Eliminar Telefono </Link>
                                    </td>
                                    <td > 
                                    <Link to={`/notas/${contacto.id}`} className='btn btn-warning btn-sm  m-1'><i className="fa-solid fa-comments"></i>notas </Link>
                                    </td>
                                    <td>
                                        <Link to={`/edit/${contacto.id}`} className='btn btn-info btn-sm  m-1' ><i className="fa-solid fa-pen-to-square "></i> Editar </Link>
                                        <button onClick={ () => deleteContatos(contacto.id)} className='btn btn-danger btn-sm '><i className="fa-solid fa-user-slash"></i> Eliminar </button>                                        
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

export default CompShowContactos
