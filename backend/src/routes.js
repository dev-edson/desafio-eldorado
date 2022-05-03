const DevicesRoutes = require('./routes/DevicesRoutes')

//Configurar rotas
exports.registerRoutes = (app) => {
    app.use('/Devices', DevicesRoutes)
}