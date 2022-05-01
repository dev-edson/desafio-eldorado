const { response } = require('express')
const express = require('express')

//Iniciar express
const app = express()

//Configursr JSON para express
app.use(express.json())

//http://localhost:3333/BuscarDevices

let devices = [
    { id: 1, partnumber: 1234560, cor: 'Amarela' },
    { id: 2, partnumber: 1234561, cor: 'Azul' },
    { id: 3, partnumber: 1234562, cor: 'Vermelha' },
]


//Criar um endpoint
app.get('/devices', (request, response) => {
    const parametros = request.query

    let devicesFiltrados = devices

    if (parametros) {
        devicesFiltrados = devices.filter(device => {
            if (parametros.cor && parametros.partnumber) {
                return device.cor === parametros.cor && device.partnumber === parseInt(parametros.partnumber)
            } else if (parametros.cor) {
                return device.cor === parametros.cor
            } else if (parametros.partnumber) {
                return device.partnumber === parseInt(parametros.partnumber)
            } else {
                return device
            }
        })
    }

    return response.json({ devices: devicesFiltrados })
})

//Criar um endpoint com paramnetro
app.get('/Devices/:id', (request, response) => {
    const id = request.params.id

    return response.json({
        devices: devices.filter(device => device.id === parseInt(id))
    })
})

//Adicionar um carro
app.post('/devices', (request, response) => {
    const device = request.body

    device.id = devices.length + 1
    devices.push(device)

    return response.json({ mensagem: 'Device cadatrado com sucesso!' })
})

//Atualizar um device
app.put('/devices/:id', (request, response) => {
    const deviceId = request.params.id
    const novoDevice = request.body

    devices = devices.map(device => {
        if (device.id === parseInt(deviceId)) {
            return Object.assign(device, novoDevice)
        } else {
            return device
        }
    })
    return response.json({ mensagem: 'Device atualizado com sucesso!' })
})

//Deletar um device
app.delete('/devices/:id', (request, response) => {
    const deviceId = request.params.id

    devices = devices.filter(device => device.id !== parseInt(deviceId))

    return response.json({ mensagem: 'Device deletado com sucesso!' })
})


//Iniciar servidor
app.listen(3333, () => {
    console.log('Servidor rodando em http://localhost:3333')
})