const database = require('../database/database')
const TelefonoModel = require('./TelefonoModel')
const NotaModel = require('./NotaModel')
const GrupoModel = require('./GrupoModel')
const { DataTypes } = require('sequelize')

const ContactoModel = database.define('contacto',{
    nombre:{
        type: DataTypes.STRING,
        validate: {
            notEmpty: {msg: "Falta nombre del contacto"}
        }  
    },
    apellidos:{
        type: DataTypes.STRING,
        validate: {
            notEmpty: {msg: "Falta apellido(S) del contacto"}
        }  
    },
    correo:{
        type: DataTypes.STRING,
    },
    direccion:{
        type: DataTypes.STRING        
    }
})

ContactoModel.hasMany(TelefonoModel, {
    foreignKey: 'contactoID',
    sourceKey: 'id'
})

TelefonoModel.belongsTo(ContactoModel, {
    foreignKey: 'contactoID',
    targetID: 'id'
})

ContactoModel.hasMany(NotaModel, {
    foreignKey: 'contactoID',
    sourceKey: 'id'
})

NotaModel.belongsTo(ContactoModel, {
    foreignKey: 'contactoID',
    targetID: 'id'
})

GrupoModel.hasMany(ContactoModel, {
    foreignKey: 'grupoID',
    sourceKey: 'id'
})

ContactoModel.belongsTo(GrupoModel, {
    foreignKey: 'grupoID',
    targetID: 'id'
})

module.exports = ContactoModel