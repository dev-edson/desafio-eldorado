const DeviceRoutes = require('./routes/DeviceRoutes')

//Configurar rotas
const registerRoutes = (app) => {
    app.use('/Devices', DeviceRoutes)
}

module.exports = { registerRoutes }