const Device = require('../models/Device')

class DeviceRepository {
    constructor() {
        this._devices = []
    }

    salvarDevice(device) {
        if (device instanceof Device) {
            this._devices.push(device)
        }
    }

    listarDevices() {
        return [...this._devices]
    }

    filtrarDevicesPorAno(ano) {
        this._devices.filter(device => device.getAno() === ano)
    }

    removerDevices(category) {
        this._devices = this._devices.filter(device => device.getCategory() !== category)
    }

    editarDevice(novoDevice) {
        this._devices = this._devices.map(device => {
            if (device.getCategory() === novoDevice.getCategory()) {
                return novoDevice
            } else {
                return device
            }
        })
    }
}

module.exports = DeviceRepository