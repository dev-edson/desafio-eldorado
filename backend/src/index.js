const Device = require('./models/Device')
const DeviceRepository = require('./repositories/DeviceRepository')

function main() {
    let repositorio = new DeviceRepository();

    let device = new Device('Basico', 'Preta', '123456')

    repositorio.salvarDevice(device)

    console.log('Devices:', repositorio.listarDevices())
}

main()