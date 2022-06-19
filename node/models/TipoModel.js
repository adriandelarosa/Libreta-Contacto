const database = require('../database/database')
const { DataTypes } = require('sequelize')

const TipoModel = database.define('tipo',{
    nombre:{
        type: DataTypes.STRING,
        validate: {
            notEmpty: {msg: "Falta nombre del tipo de numero telefonico"}
        }  
    }
})

module.exports = TipoModel