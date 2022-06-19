//// OBTENER LOS METODOS A USAR POR LAS RUTAS, METODOS QUE ESTAN EN CONTROLLER ////
const { getAllNota, getNota, createNota, updateNota, deleteNota, getNotaConta } = require('../controllers/NotaController')

const router = require('express').Router()

//// OBTENER TODOS LOS NOTAS ////
router.get('/all', getAllNota)

//// OBTENER UNA NOTA ESPECIFICA ////
router.get('/:id', getNota)

//// CREAR UNA NOTA ESPECIFICA ////
router.post('/', createNota)

//// ACTUALIZAR UNA NOTA ESPECIFICA ////
router.put('/:id', updateNota)

//// ELIMINAR UNA NOTA ESPECIFICA ////
router.delete('/:id',deleteNota)

//// OBTNER TODAS LAS NOTAS POR USUARIO ////
router.get('/contactos/:contactoID/notas',getNotaConta)

module.exports = router