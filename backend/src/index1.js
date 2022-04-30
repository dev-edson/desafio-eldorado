//index.js do erc
const DeviceRepository = require('./repositories/DeviceRepository')

//const Device = require('./database/models/device')

async function main() {
    const deviceRepository = new DeviceRepository()

    //Inserir um novo device
    //const device = {
    //    device_category_id: 5,
    //    device_color: 'Amarela',
    //    device_partnumber: 123456
    // }

    //Adicionar um device
    //await deviceRepository.add(device)

    //const devices = await deviceRepository.selectAll()

    //console.log(devices[1].dataValues)

    console.log(devices)

    const devices = await deviceRepository.remove({ id: 4 })
}


main()