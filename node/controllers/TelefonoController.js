//// CREO CONSTANTE DEL MODELO ////
const TelefonoModel = require('../models/TelefonoModel')

////** METODOS PARA EL CRUD **////

//// LISTAR TODOS LOS REGISTROS ////
exports.getAllTelefono = async (req,res)=>{
    try {
        const numeros = await TelefonoModel.findAll()
        res.json(numeros)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// MOSTRAR UN REGISTRO UNICO ////
exports.getTelefono = async (req,res)=>{
    try {
        const id = req.params.id
        const numero = await TelefonoModel.findByPk(id)
        res.json(numero)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// CREAR UN TELEFONO ////
exports.createTelefono = async (req,res)=>{
    try {
        await TelefonoModel.create(req.body)
        res.json({
            "msg":"¡Numero creado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// ACTUALIZAR UN TELEFONO ////
exports.updateTelefono = async (req,res)=>{
    try {
        const id = req.params.id
        await TelefonoModel.update(req.body,{
            where: { id: id }
        })
        res.json({
            "msg":"¡Numero actualizado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// ELIMINAR UN TELEFONO ////
exports.deleteTelefono = async (req,res)=>{
    try {
        const id = req.params.id
        await TelefonoModel.destroy({
            where: { id: id }
        })
        res.json({
            "msg":"¡Numero eliminado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}