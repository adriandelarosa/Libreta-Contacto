//// OBTENER LOS METODOS A USAR POR LAS RUTAS, METODOS QUE ESTAN EN CONTROLLER ////
const { getAllTipo, getTipo, createTipo, updateTipo, deleteTipo, getTelTipo } = require('../controllers/TipoController')

const router = require('express').Router()

//// OBTENER TODOS LOS TIPOS////
router.get('/all', getAllTipo)

//// OBTENER UN TIPO ESPECIFICO ////
router.get('/:id', getTipo)

//// CREAR UN TIPO ESPECIFICO ////
router.post('/', createTipo)

//// ACTUALIZAR UN TIPO ESPECIFICO ////
router.put('/:id', updateTipo)

//// ELIMINAR UN TIPO ESPECIFICO ////
router.delete('/:id',deleteTipo)

//// OBTNER TODOS LOS CONTACTOS POR TIPO Y CONTACTO ////
router.get('/:id/:contactoID/telefonos',getTelTipo)

module.exports = router