//// OBTENER LOS METODOS A USAR POR LAS RUTAS, METODOS QUE ESTAN EN CONTROLLER ////
const { getAllTelefono, getTelefono, createTelefono, updateTelefono, deleteTelefono } = require('../controllers/TelefonoController')

const router = require('express').Router()

//// OBTENER TODOS LOS NUMEROS////
router.get('/all', getAllTelefono)

//// OBTENER UN NUMEROS ESPECIFICO ////
router.get('/:id', getTelefono)

//// CREAR UN NUMEROS ESPECIFICO ////
router.post('/', createTelefono)

//// ACTUALIZAR UN NUMEROS ESPECIFICO ////
router.put('/:id', updateTelefono)

//// ELIMINAR UN NUMEROS ESPECIFICO ////
router.delete('/:id',deleteTelefono)


module.exports = router