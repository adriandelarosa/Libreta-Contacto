const sequelize = require('sequelize')

const database = new sequelize ('betapp','root','Estrellita12',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = database