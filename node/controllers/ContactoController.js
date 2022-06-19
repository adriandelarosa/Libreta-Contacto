//// CREO CONSTANTE DEL MODELO ////
const ContactoModel = require('../models/ContactoModel')
const TelefonoModel = require('../models/TelefonoModel')



////** METODOS PARA EL CRUD **////

//// LISTAR TODOS LOS REGISTROS ////
exports.getAllContactos = async (req,res)=>{
    try {
        const contactos = await ContactoModel.findAll()
        res.json(contactos)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// MOSTRAR UN REGISTRO UNICO ////
exports.getContacto = async (req,res)=>{
    try {
        const id = req.params.id
        const contacto = await ContactoModel.findByPk(id)
        res.json(contacto)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// CREAR UN CONTACTO ////
exports.createContacto = async (req,res)=>{
    try {
        await ContactoModel.create(req.body)
        res.json({
            "msg":"¡Contacto creado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// ACTUALIZAR UN CONTACTO ////
exports.updateContacto = async (req,res)=>{
    try {
        const id = req.params.id
        await ContactoModel.update(req.body,{
            where: { id: id }
        })
        res.json({
            "msg":"¡Contacto actualizado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// ELIMINAR UN CONTACTO ////
exports.deleteContacto = async (req,res)=>{
    try {
        const id = req.params.id
        await ContactoModel.destroy({
            where: { id: id }
        })
        res.json({
            "msg":"¡Contacto eliminado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// OBTENER TODOS LOS NUMEROS DE TELEFONO POR CONTACTO ////
exports.getTelConta = async (req,res)=>{
    try {
        const contactoID = req.params.contactoID
        const numeros = await TelefonoModel.findAll({
            where: { contactoID: contactoID }
        })
        res.json(numeros)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}