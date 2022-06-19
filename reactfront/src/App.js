import './App.css';

//// IMPORTAR COMPONENTES ////
import CompShowContactos from './contacto/ShowContacto'
import CompCreateConta from './contacto/CreateContacto'
import CompEditConta from './contacto/EditContacto'
import CompLogin from './login/login'
import CompReg from './login/registro'
import CompShowNota from './nota/ShowNota'
import CompEditNota from './nota/EditNota'
import CompCreateNota from './nota/CreateNota'
import CompCreateTelefono from './telefono/CreateTelefono'
import EliminarTele from './telefono/EliminarTelefono'



import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <header>
      <div className='container'>
      <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1"><i class="fa-solid fa-book"></i> Bienvenidos al sistema</span>
        <a className="navbar-brand mb-0 h1" href="#"><i class="fa-solid fa-user-injured"></i>Username: @login</a>
    
      </div>
      </nav>
      <br></br>
      </div>
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/registro' element={<CompReg></CompReg>}></Route> 
            <Route exact path='/login' element={<CompLogin></CompLogin>}></Route>
            <Route path='/' element={<PrivateRoute/>}>
                <Route path='/' element={<CompShowContactos/>}/>
                <Route path='/create' element={<CompCreateConta/>}></Route>
                <Route path='/edit/:id' element={<CompEditConta/>}></Route>
                <Route path='/notas/:contactoID' element={<CompShowNota/>}></Route>
                <Route path='/notas/create/:contactoID' element={<CompCreateNota/>}></Route>
                <Route path='/notas/edit/:notaID' element={<CompEditNota/>}></Route>
                <Route path='/telefono/create/:contactoID' element={<CompCreateTelefono/>}></Route>
                <Route path='/telefono/eliminar/:contactoID' element={<EliminarTele/>}></Route>
            </Route> 
            
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

