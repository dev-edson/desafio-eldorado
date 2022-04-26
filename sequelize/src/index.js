const Device = require('./device')
const usuario = require('./usuario')

const database = require('./database')
async function main() {
    // await database.sync()
    //Inserir um novo Device
    const Device = await Device.create({
        category_id: 1,
        device_color: 'Amarela',
        device_partnumber: 123456,
    })

    //console.log(device.device_id)

    //Selecionar os Devices
    const devices = await Device.findAll()

    //Edital um carro
    //const device = device[0]
    //device.device_color = 'Azul'
    //await device.save()

    //Remover um device
    //await device.destroy()

    //await Device.destroy({
    //    where: {
    //        device_color: 'Preta'
    //    }
    //})

    //console.log('Devices', devices[0].dataValues)

}

main()