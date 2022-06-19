//// OBTENER LOS METODOS A USAR POR LAS RUTAS, METODOS QUE ESTAN EN CONTROLLER ////
const { getAllUsuario, getUsuario, createUsuario, updateUsuario, deleteUsuario, getUsuarioConta } = require('../controllers/UsuarioController')

const router = require('express').Router()

//// OBTENER TODOS LOS USUARIOS/CONTACTOS ////
router.get('/', getAllUsuario)

//// OBTENER UN USUARIO ESPECIFICO ////
router.post('/login/:username/:pass', getUsuario)

//// CREAR UN USUARIO ESPECIFICO ////
router.post('/', createUsuario)

//// ACTUALIZAR UN USUARIO ESPECIFICO ////
router.put('/:id', updateUsuario)

//// ELIMINAR UN USUARIO ESPECIFICO ////
router.delete('/:id',deleteUsuario)

//// OBTNER TODOS LOS CONTACTOS POR USUARIO ////
router.get('/usuario/:id/contactos',getUsuarioConta)

module.exports = router