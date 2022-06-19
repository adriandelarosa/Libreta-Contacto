//// CREO CONSTANTE DEL MODELO ////
const UsuarioModel = require('../models/UsuarioModel')
const ContactoModel = require('../models/ContactoModel')

////** METODOS PARA EL CRUD **////

//// LISTAR TODOS LOS REGISTROS ////
exports.getAllUsuario = async (req,res)=>{
    try {
        const usuarios = await UsuarioModel.findAll()
        res.json(usuarios)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// MOSTRAR UN REGISTRO UNICO ////
exports.getUsuario = async (req,res)=>{
    try {
        const username = req.params.username
        const pass = req.params.pass
        const usuario = await UsuarioModel.findAll({
            where: { 
                username: username,
                pass: pass
                 }
        })
            res.json(usuario)
        
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// CREAR UN USUARIO ////
exports.createUsuario = async (req,res)=>{
    try {
        const usuario = await UsuarioModel.create(req.body)
        res.json({
            "msg":"¡Usuario creado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// ACTUALIZAR UN USUARIO ////
exports.updateUsuario = async (req,res)=>{
    try {
        const id = req.params.id
        const usuario = await UsuarioModel.update(req.body,{
            where: { id: id }
        })
        res.json({
            "msg":"¡Usuario actualizado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// ELIMINAR UN USUARIO ////
exports.deleteUsuario = async (req,res)=>{
    try {
        const id = req.params.id
        const usuario = await UsuarioModel.destroy({
            where: { id: id }
        })
        res.json({
            "msg":"¡Usuario eliminado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


//// OBTENER TODOS LOS CONTACTOS POR USUARIO ////
exports.getUsuarioConta = async (req,res)=>{
    try {
        const id = req.params.id
        const contactos = await ContactoModel.findAll({
            where: { usuarioID: id }
        })
        res.json(contactos)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

