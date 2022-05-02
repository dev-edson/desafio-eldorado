const express = require('express')

const DevicesRoutes = require('./routes/DevicesRoutes')

//Iniciar express
const app = express()

//Configursr JSON para express
app.use(express.json())

//Configurar rotas
app.use('/Devices', DevicesRoutes)

//Iniciar servidor
app.listen(3333, () => {
    console.log('Servidor rodando em http://localhost:3333')
})