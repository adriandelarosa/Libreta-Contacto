import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'


const URI = 'http://localhost:8000/'


const CompReg = ()=>{
    const [username, setusername] = useState([])
    const [pass, setpass] = useState([])
    const navigate = useNavigate()


    //// PROCEDIMIENTO PARA CREAR UN USUARIO EN FORMATO REGISTRO ////
    const registro = async (e)=>{
        e.preventDefault()
        await axios.post(URI, {username: username, pass:pass})       
        navigate('/login')
    }

    

    return(

        <div className='container'>
            <h2>REGISTRO</h2>
            <form onSubmit={registro}>

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
                        required/>
                    </div>
                </div>


                <br></br>
                <button type='submit' className='btn btn-info'>REGISTRARSE</button>

            </form>
		</div>         

        
    )

}

export default CompReg
