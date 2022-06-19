//// OBTENER LOS METODOS A USAR POR LAS RUTAS, METODOS QUE ESTAN EN CONTROLLER ////
const { getAllGrupo, getGrupo, createGrupo, updateGrupo, deleteGrupo, getGrupoContaUser} = require('../controllers/GrupoController')

const router = require('express').Router()

//// OBTENER TODOS LOS GRUPOS    ////
router.get('/all', getAllGrupo)

//// OBTENER UN CONTACTO ESPECIFICO ////
router.get('/:id', getGrupo)

//// CREAR UN CONTACTO ESPECIFICO ////
router.post('/', createGrupo)

//// ACTUALIZAR UN CONTACTO ESPECIFICO ////
router.put('/:id', updateGrupo)

//// ELIMINAR UN CONTACTO ESPECIFICO ////
router.delete('/:id',deleteGrupo)

//// OBTNER TODOS LOS CONTACTOS POR GRUPO ////
router.get('/:id/:usuarioID/contactos',getGrupoContaUser)


module.exports = router