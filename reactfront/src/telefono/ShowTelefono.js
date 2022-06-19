import axios from 'axios'
import {useState, useEffect} from 'react'
import CompShowTipo from '../tipo/ShowTipo'


const URIC = 'http://localhost:8000/contacto/'
////`/edit/${contacto.id}`

const CompShowTelefonoBycont = (props)=>{
    const [telefonos, setTelefono] = useState([])
    const contactoID = props.contactoID
    useEffect( ()=>{
        getTelefonosBycont()
        },[])

    //// PROCEDIMIENTO PARA OBTENER UN GRUPO ESPECIFICO ////
    const getTelefonosBycont = async () => {
        const res = await axios.get(URIC+contactoID+'/numeros')
        setTelefono(res.data)
    }

    return(
        <table className='table table-borderless'>
        <tbody>
                            {telefonos.map ( (telefono) => (
                                
                                <tr key={ telefono.id}>
                                    <td> {telefono.numero} </td>
                                    <td> - </td>
                                    <td> <CompShowTipo tipoID={telefono.tipoID} /> </td>
                                </tr>
                            ) )}

                        </tbody>
                    </table>
        )
}

export default CompShowTelefonoBycont
