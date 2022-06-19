//// CREO CONSTANTE DEL MODELO ////
const NotaModel = require('../models/NotaModel')

////** METODOS PARA EL CRUD **////

//// LISTAR TODOS LOS REGISTROS ////
exports.getAllNota = async (req,res)=>{
    try {
        const notas = await NotaModel.findAll()
        res.json(notas)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// MOSTRAR UN REGISTRO UNICO ////
exports.getNota = async (req,res)=>{
    try {
        const id = req.params.id
        const nota = await NotaModel.findByPk(id)
        res.json(nota)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// CREAR UNA NOTA ////
exports.createNota = async (req,res)=>{
    try {
        await NotaModel.create(req.body)
        res.json({
            "msg":"¡Nota creada exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// ACTUALIZAR UN NOTA ////
exports.updateNota = async (req,res)=>{
    try {
        const id = req.params.id
        await NotaModel.update(req.body,{
            where: { id: id }
        })
        res.json({
            "msg":"¡Nota actualizada exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// ELIMINAR UN NOTA ////
exports.deleteNota = async (req,res)=>{
    try {
        const id = req.params.id
        await NotaModel.destroy({
            where: { id: id }
        })
        res.json({
            "msg":"¡Nota eliminado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// OBTENER TODOS LAS NOTAS POR CONTACTO ////
exports.getNotaConta = async (req,res)=>{
    try {
        const contactoID = req.params.contactoID
        const notas = await NotaModel.findAll({
            where: { 
                contactoID: contactoID }
        })
        res.json(notas)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}
