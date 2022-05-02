const { response } = require('express')

const DevicesRoute = require('./routes/CarrosRoute4')

//Iniciar express
const app = express()

//Configursr JSON para express
app.use(express.json())

app.use('/Devices', DevicesRoute)

//Iniciar servidor
app.listen(3333, () => {
    console.log('Servidor rodando em http://localhost:3333')
})