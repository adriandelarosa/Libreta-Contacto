const database = require('../database/database')
const { DataTypes } = require('sequelize')

const GrupoModel = database.define('grupo',{
    nombre:{
        type: DataTypes.STRING,
        validate: {
            notEmpty: {msg: "Falta nombre del grupo de contacto"}
        }  
    },
    descripcion:{
        type: DataTypes.STRING
    }
})

module.exports = GrupoModel