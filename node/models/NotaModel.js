const database = require('../database/database')
const { DataTypes } = require('sequelize')

const NotaModel = database.define('nota',{
    nota:{
        type: DataTypes.STRING,    
    }
})

module.exports = NotaModel