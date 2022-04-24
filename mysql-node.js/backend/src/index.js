//const Device = require('src/models/Device')
const Device = require('./models/Device')
const DeviceRepository = require('./repositories/DeviceRepository')

async function main() {
    let repositorio = new DeviceRepository()


    const devices = await repositorio.listarDevices()
    //repositorio.listarDevices(function (devices) {
    if (devices) {
        console.log('devices', devices)
    } else {
        console.log('Nemhum device foi encontrado')
    }
    //})


    //Incluir device
    //let device2 = new Device(2, 123458, 'Azul')
    //let device3 = new Device(2, 123458, 'Preta')
    //let device4 = new Device(2, 123458, 'Vermelha')


    //repositorio.salvarDevice(device3, result => {
    //    console.log('Inseriu com sucesso', result)
    //})

    //Remover device
    //repositorio.removerDevice(2, result => console.log('Deletou o item', result))
    //repositorio.removerDevice(3)

    //Alterar device
    //let device = new Device(1, 123457, 'Branca',1)
    //repositorio.editarDevice(device)

    //Filtrar devices
    //    repositorio.filtrarDevices({ category: 2, partnumber: 123458 }, devices => {
    //        console.log(devices)

    //        repositorio.filtrarDevices({ partnumber: 123460, color: 'Preta' }, devices => {
    //            console.log(devices)
    //        })

    //    })

}

main()
