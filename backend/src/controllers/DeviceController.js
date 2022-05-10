const ResponseBuilder = require('../utils/ResponseBuilder')

let devices = [
    { id: 1, partnumber: 1234560, cor: 'Amarela' },
    { id: 2, partnumber: 1234561, cor: 'Azul' },
    { id: 3, partnumber: 1234562, cor: 'Vermelha' },
    { id: 4, partnumber: 1234563, cor: 'Preta' },
]

class DevicesController {
    get(request, response) {
        try {
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

            const ResponseContent = ResponseBuilder.createResponseContent({ devicesFiltrados })

            return response.status(200).json(ResponseContent)
        } catch (error) {
            const ResponseErrors = ResponseBuilder.createResponseErrors([error.message])

            return response.status(400).json(ResponseErrors)
        }
    }

    getOne(request, response) {
        try {
            const id = request.params.id

            const devicesFiltrados = devices.filter(device => device.id === parseInt(id))

            return response.status(200).json({ devices: devicesFiltrados })
        } catch (error) {
            return response.status(400).json({ mensagem: error.message })
        }
    }

    post(request, response) {
        try {
            const device = request.body

            device.id = devices.length + 1

            devices.push(device)

            return response.status(201).json({ mensagem: 'Device cadatrado com sucesso!' })
        } catch (error) {
            return response.status(400).json({ mensagem: error.message })
        }
    }

    put(request, response) {
        try {
            const deviceId = request.params.id
            const novoDevice = request.body

            devices = devices.map(device => {
                if (device.id === parseInt(deviceId)) {
                    return Object.assign(device, novoDevice)
                } else {
                    return device
                }
            })
            return response.status(200).json({ mensagem: 'Device atualizado com sucesso!' })
        } catch (error) {
            return response.status(400).json({ mensagem: error.message })
        }
    }

    delete(request, response) {
        try {
            const deviceId = request.params.id

            devices = devices.filter(device => device.id !== parseInt(deviceId))

            return response.status(200).json({ mensagem: 'Device deletado com sucesso!' })
        } catch (error) {
            return response.status(400).json({ mensagem: error.message })
        }
    }
}

module.exports = new DevicesController()