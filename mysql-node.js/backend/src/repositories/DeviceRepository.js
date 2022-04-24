const { tratarErro } = require('../utils/logUtils')

const Device = require('../models/Device')
const conexao = require('../config/mysql')

class DeviceRepository {
    _criarTabela() {
        const criacaoTabelaCategories = `
    CREATE TABLE IF NOT EXISTS categories ( 
      category_id INT AUTO_INCREMENT PRIMARY KEY, 
      category_name VARCHAR(128) NOT NULL 
    )
    `
        this._bancoDeDados.query(criacaoTabelaCategories, (err) => { tratarErro(err) })

        const criacaoTabelaDevices = `
    CREATE TABLE IF NOT EXISTS devices ( 
      device_id INT AUTO_INCREMENT PRIMARY KEY,
      category_id INT,
      device_partnumber INT,
      device_color VARCHAR(16) NOT NULL,
      CONSTRAINT fk_categories FOREIGN KEY (category_id) REFERENCES categories(category_id) 
    )
    `
        this._bancoDeDados.query(criacaoTabelaDevices, (err) => { tratarErro(err) })
    }

    //Inserir dados na tabela
    async salvarDevice(device) {
        let connection

        try {
            if (device instanceof Device) {
                const sql = `INSERT INTO devices (category_id, device_partnumber, device_color)
                VALUES (:category, :partnumber, :color)
      `
                const parametros = {
                    category: device.getCategory_id(),
                    partnumber: device.getPartnumber(),
                    color: device.getColor()
                }

                connection = await conexao()
                await connection.query(sql, parametros)
            }
        } catch (error) {
            console.log('Erro ao salvar um device', error.message)
        } finally {
            connection.end()
        }
    }


    async listarDevices() {
        let connection

        try {
            const sql = 'SELECT * FROM devices'

            connection = await conexao()
            const [result] = await connection.query(sql)

            let devicesFormatados = []

            if (result.length > 0) {
                devicesFormatados = result.map(device =>
                    new Device(
                        device.category_id,
                        device.device_partnumber,
                        device.device_color,
                        device.device_id
                    )
                )
            }

            return [...devicesFormatados]
        } catch (error) {
            console.log('Erro ao listar devices', error.messge)
        } finally {
            connection.end()
        }
    }

    async filtrarDevices(filtro) {
        const { category, partnumber, color } = filtro

        const filtros = []
        const filtrosValores = []

        if (category) {
            filtros.push('category_id = ?')
            filtrosValores.push(category)
        }

        if (partnumber) {
            filtros.push('device_partnumber = ?')
            filtrosValores.push(partnumber)
        }

        if (color) {
            filtros.push('device_color = ?')
            filtrosValores.push(color)
        }

        let connection

        try {
            let filtroSql = 'SELECT * FROM devices'

            if (filtros.length > 0) {
                filtroSql += ' WHERE ' + filtros.join(' AND ')
            }

            connection = await conexao()
            const result = await connection.queryole.log(filtroSql, filtrosValores)

            let devicesFormatados = []

            if (result.length > 0) {
                devicesFormatados = result.map(device =>
                    new Device(
                        device.category_id,
                        device.device_partnumber,
                        device.device_color,
                        device.device_id
                    )
                )
            }

            return ([...devicesFormatados])
        } catch (error) {
            console.log('Erro ao filtrar os devices', error.message)
        } finally {
            connection.end()
        }
    }

    async editarDevice(device) {
        let connection


        try {
            const sql = `
        UPDATE devices SET 
          category_id = :category, 
          device_partnumber = :partnumber, 
          device_color = :color
        WHERE device_id = :id
        `
            const Parametros = {
                category: device.getCategory_id(),
                partnumber: device.getPartnumber(),
                color: device.getColor(),
                id: device.getId()
            }
            connection = await conexao()
            await connection.query(sql, parametros)
        } catch (error) {
            console.log('Erro ao editar device', error.message)
        } finally {
            connection.end()
        }
    }

    async removerDevice(idDevice) {
        let connection

        try {
            const Sql = `DELETE FROM devices WHERE device_id = :idDevice`

            connection = await conexao()
            await connection.query(sql, { idDevice })
        } catch (error) {
            console.log('Erro ao removerr device', error.message)
        } finally {
            connection.end()
        }
    }
}

module.exports = DeviceRepository

