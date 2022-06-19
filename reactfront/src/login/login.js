import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const axios2 = require('axios').default;

const URI = 'http://localhost:8000/'


const CompLogin = ()=>{
    const [username, setusername] = useState([])
    const [pass, setpass] = useState([])
    const navigate = useNavigate()


    
    //// PROCEDIMIENTO PARA CREAR UN USUARIO EN FORMATO REGISTRO ////
    const login = async (e)=>{
        e.preventDefault()
        const datos = await axios2.get(`${URI}login/${username}/${pass}`)
                  
        console.log(datos)
        ///navigate('/login')
    }

    

    return(

        <div className='container'>
            <h2>INICIAR SECCION</h2>
            <form onSubmit={login}>

                <div className='d-flex flex-row justify-content-center'>
                    <div className='col-md-6 mb-2'>
                        <label className='form-label'>Username</label>
                        <input 
                        className='form-control' 
                        type="text"
                        onChange={(e)=>setusername(e.target.value)}
                        required/>          
                    </div>

                    <div className='col-md-6 mb-2'>
                    <label className='form-label'>Password</label>
                        <input 
                        className='form-control' 
                        type="text"
                        onChange={(e)=>setpass(e.target.value)}
                        />
                    </div>
                </div>


                <br></br>
                <button type='submit' className='btn btn-info'>Acceder</button>

            </form>
		</div>         
        
    )

}

export default CompLogin
