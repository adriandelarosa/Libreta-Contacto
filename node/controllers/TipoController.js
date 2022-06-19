//// CREO CONSTANTE DEL MODELO ////
const TipoModel = require('../models/TipoModel')
const TelefonoModel = require('../models/TelefonoModel')

////** METODOS PARA EL CRUD **////

//// LISTAR TODOS LOS REGISTROS ////
exports.getAllTipo = async (req,res)=>{
    try {
        const tipos = await TipoModel.findAll()
        res.json(tipos)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// MOSTRAR UN REGISTRO UNICO ////
exports.getTipo = async (req,res)=>{
    try {
        const id = req.params.id
        const tipo = await TipoModel.findByPk(id)
        res.json(tipo)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// CREAR UN TIPO ////
exports.createTipo = async (req,res)=>{
    try {
        await TipoModel.create(req.body)
        res.json({
            "msg":"¡Tipo creado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// ACTUALIZAR UN TIPO ////
exports.updateTipo = async (req,res)=>{
    try {
        const id = req.params.id
        await TipoModel.update(req.body,{
            where: { id: id }
        })
        res.json({
            "msg":"¡Tipo actualizado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// ELIMINAR UN TIPO ////
exports.deleteTipo = async (req,res)=>{
    try {
        const id = req.params.id
        await TipoModel.destroy({
            where: { id: id }
        })
        res.json({
            "msg":"¡Tipo eliminado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// OBTENER TODOS LOS NUMEROS POR TIPO Y CONTACTO////
exports.getTelTipo = async (req,res)=>{
    try {
        const id = req.params.id
        const contactoID = req.params.contactoID
        const telefonos = await TelefonoModel.findAll({
            where: { 
                contactoID: contactoID,
                tipoID: id }
        })
        res.json(telefonos)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}