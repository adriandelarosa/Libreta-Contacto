const express = require('express')
const cors = require('cors')
const database = require('./database/database')
const usuariorout = require('./routes/UsuarioRoutes')
const contactorout = require('./routes/ContactoRoutes')
const gruporout = require('./routes/GrupoRoutes')
const tiporout = require('./routes/TipoRoutes')
const telefonorout = require('./routes/TelefonoRoutes')
const notanorout = require('./routes/NotaRoutes')
const app = express()
const port = process.env.port || 8000


//// TESTING THE CONNECTION ////
async function asyncCall() {
    try {
        await database.authenticate()
        //await database.sync({force: true})
        await database.sync()
        console.log('conexion exitosa')
    } catch (error) {
        console.error('Unable to connect to the database: ', error)
    }
}
asyncCall()


//// MIDDLEWARE ////
app.use(express.json()) //Recibir info
app.use(cors()) //Habilitar otras app para hacer solicitud


//// ROUTES ////
app.use(usuariorout)
app.use('/contacto',contactorout)
app.use('/grupo',gruporout)
app.use('/tipo',tiporout)
app.use('/telefono',telefonorout)
app.use('/nota',notanorout)


//// SERVER RUNNING ////
app.listen(port, ()=>{
    console.log('Server running on port ',port)
})