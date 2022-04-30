const express = require('express')

//Iniciar express
const app = express()

//Configursr JSON para express
app.use(express.json())

//http://localhost:3333/BuscarDevices

const devices = [
    { id: 1, partnumber: 1234560, cor: 'Amarela' },
    { id: 2, partnumber: 1234561, cor: 'Azul' },
    { id: 3, partnumber: 1234562, cor: 'Vermelha' },
]


//Criar um endpoint
app.get('/Devices', (request, response) => {
    return response.json({ devices })
})

//Criar um endpoint com paramnetro
app.get('/Devices/:id', (request, response) => {
    const id = request.params.id

    return response.json({
        devices: devices.filter(device => device.id === parseInt(id))
    })
})

//Adicionar um carro
app.post('/Devices', (request, response) => {
    const device = request.body

    device.id = device.length + 1

    device.push(device)

    return response.json({ mensagem: 'Carro cadastrado com sucesso!' })
})

//Iniciar servidor
app.listen(3333, () => {
    console.log('Servidor rodando em http://localhost:3333')
})