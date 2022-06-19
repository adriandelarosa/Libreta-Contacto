const database = require('../database/database')
const TipoModel = require('./TipoModel')
const { DataTypes } = require('sequelize')

const TelefonoModel = database.define('telefono',{
    numero:{
        type: DataTypes.STRING,
        validate: {
            notEmpty: {msg: "Falta numero de contacto"}
        }   
    }
})

TipoModel.hasMany(TelefonoModel, {
    foreignKey: 'tipoID',
    sourceKey: 'id'
})

TelefonoModel.belongsTo(TipoModel, {
    foreignKey: 'tipoID',
    targetID: 'id'
})

module.exports = TelefonoModel