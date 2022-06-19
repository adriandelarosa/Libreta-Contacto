//// OBTENER LOS METODOS A USAR POR LAS RUTAS, METODOS QUE ESTAN EN CONTROLLER ////
const { getAllContactos, getContacto, createContacto, updateContacto, deleteContacto, getTelConta, getGpConta} = require('../controllers/ContactoController')

const router = require('express').Router()

//// OBTENER TODOS LOS CONTACTOS ////
router.get('/all', getAllContactos)

//// OBTENER UN CONTACTO ESPECIFICO ////
router.get('/:id', getContacto)

//// CREAR UN CONTACTO ESPECIFICO ////
router.post('/', createContacto)

//// ACTUALIZAR UN CONTACTO ESPECIFICO ////
router.put('/:id', updateContacto)

//// ELIMINAR UN CONTACTO ESPECIFICO ////
router.delete('/:id',deleteContacto)

//// OBTNER NUMEROS POR CONTACTO ////
router.get('/:contactoID/numeros',getTelConta)

module.exports = router