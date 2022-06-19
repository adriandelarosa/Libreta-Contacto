const database = require('../database/database')
const ContactoModel = require('./ContactoModel')
const { DataTypes } = require('sequelize')

const UsuarioModel = database.define('usuario',{
    username:{
        type: DataTypes.STRING,
        unique: true,
        validate: {
            notEmpty: {msg: "Falta username de la app"}
        }     
    },
    pass:{
        type: DataTypes.STRING,
        validate: {
            notEmpty: {msg: "Falta password de la app"}
        }   
    }
})

UsuarioModel.hasMany(ContactoModel, {
    foreignKey: 'usuarioID',
    sourceKey: 'id'
})

ContactoModel.belongsTo(UsuarioModel, {
    foreignKey: 'usuarioID',
    targetID: 'id'
})

module.exports = UsuarioModel