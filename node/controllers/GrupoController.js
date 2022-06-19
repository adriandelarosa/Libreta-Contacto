//// CREO CONSTANTE DEL MODELO ////
const GrupoModel = require('../models/GrupoModel')
const ContactoModel = require('../models/ContactoModel')

////** METODOS PARA EL CRUD **////

//// LISTAR TODOS LOS REGISTROS ////
exports.getAllGrupo = async (req,res)=>{
    try {
        const Grupos = await GrupoModel.findAll()
        res.json(Grupos)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// MOSTRAR UN REGISTRO UNICO ////
exports.getGrupo = async (req,res)=>{
    try {
        const id = req.params.id
        const grupo = await GrupoModel.findByPk(id)
        res.json(grupo)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// CREAR UN GRUPO ////
exports.createGrupo = async (req,res)=>{
    try {
        await GrupoModel.create(req.body)
        res.json({
            "msg":"¡Grupo creado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// ACTUALIZAR UN GRUPO ////
exports.updateGrupo = async (req,res)=>{
    try {
        const id = req.params.id
        await GrupoModel.update(req.body,{
            where: { id: id }
        })
        res.json({
            "msg":"¡Grupo actualizado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// ELIMINAR UN GRUPO ////
exports.deleteGrupo = async (req,res)=>{
    try {
        const id = req.params.id
        await GrupoModel.destroy({
            where: { id: id }
        })
        res.json({
            "msg":"¡Grupo eliminado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// OBTENER TODOS LOS CONTACTOS POR GRUPO ////
exports.getGrupoContaUser = async (req,res)=>{
    try {
        const id = req.params.id
        const usuarioID = req.params.usuarioID
        const contactos = await ContactoModel.findAll({
            where: { 
                usuarioID: usuarioID,
                grupoID: id }
        })
        res.json(contactos)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

