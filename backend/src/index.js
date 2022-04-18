const Device = require('./models/Device')
const DeviceRepository = require('./repositories/DeviceRepository')

function main() {
    let repositorio = new DeviceRepository();

    let device = new Device(1, 'Preta', 123456)
    let device2 = new Device(2, 'Preta', 524525)
    let device3 = new Device(3, 'Azul', 452525)

    //Sdicionar um device
    repositorio.salvarDevice(device)
    repositorio.salvarDevice(device2)
    repositorio.salvarDevice(device3)

    //Listar devices
    repositorio.listarDevices(function (devices) {
        console.log(devices)

        for (const device of devices) {
            //remover um device
            repositorio.removerDevice(device.getId())

            //Editar um device
            device.setCategory_id(2)
            repositorio.editarDevice(device)
        }
    })

    repositorio.filtrarDevicesPorAno(2021, devices => {
        console.log(devices)
    })


    repositorio.removerDevice(device)
}
main()