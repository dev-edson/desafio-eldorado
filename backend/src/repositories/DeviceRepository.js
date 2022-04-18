const { tratarErro } = require('../utils/logUtils')
const { criarPastaSeNaoExistir } = require('../utils/pastaUtils')

const Device = require('../models/Device')
const sqlite = require('sqlite3')

const CAMINHO_BANCO_DADOS = 'backend/src/database/device_manager.db'
const CAMINHO_PASTA_BANCO_DADOS = 'backend/src/database'

class DeviceRepository {
    constructor() {
        criarPastaSeNaoExistir(CAMINHO_PASTA_BANCO_DADOS)

        this._bancoDeDados = new sqlite.Database(CAMINHO_BANCO_DADOS, tratarErro)
    }

    salvarDevice(device) {
        if (device instanceof Device) {
            this._bancoDeDados.run(
                `INSERT INTO devices (category_id, device_color, device_partnumber) VALUES ($category_id, $color, $partnumber)`,
                {
                    $category_id: device.getCategory_id(),
                    $color: device.getColor(),
                    $partnumber: device.getPartnumber()
                },
                tratarErro
            )
        }
    }

    listarDevices(callback) {
        this._bancoDeDados.all(
            'SELECT * FROM devices',
            function (err, rows) {
                let devicesFormatados = rows.map(device =>
                    new Device(
                        device.category_id,
                        device.device_color,
                        device.device_partnumber,
                        device.device_id
                    )
                )

                callback([...devicesFormatados])
            }
        )
    }

    filtrarDevicesPorAno(ano, callback) {
        this._bancoDeDados.all(
            'SELECT * FROM devices WHERE device_ano = $ano',
            { $ano: ano },
            function (err, rows) {
                let devicesFormatados = rows.map(device =>
                    new Device(
                        device.device_category,
                        device.device_color,
                        device.deviceo_partnumber,
                        device.device_id
                    ))

                callback([...devicesFormatados])
            }
        )
    }

    editarDevice(device) {
        this._bancoDeDados.run(
            `UPDATE devices SET 
            category_id = $category, 
            device_color = $color,  
            device_partnumber = $partnumber 
        WHERE device_id = $id`,
            {
                $id: device.getId(),
                $category: device.getCategory_id(),
                $color: device.getColor(),
                $partnumber: device.getPartnumber()
            },
            tratarErro
        )
    }

    removerDevice(idDevice) {
        this._bancoDeDados.run(
            'DELETE FROM devices WHERE device_id = $id',
            {
                $id: idDevice
            },
            tratarErro
        )
    }
}

module.exports = DeviceRepository