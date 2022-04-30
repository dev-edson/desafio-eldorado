const DeviceModel = require('../database/models/DeviceModel')
const CategoryModel = require('../database/models/CategoryModel')

class DeviceRepository {
    async add(device) {
        try {
            return await DeviceModel.create(device)
        } catch (error) {
            console.log('Erro ao salvar um device -', error.message)
        }
    }

    async selectAll() {
        try {
            return await DeviceModel.findAll({ include: [{ model: CategoryModel }] })
        } catch (error) {
            console.log('Erro ao selecionar varios devices -', error.message)
        }
    }

    async selectByFilter(filter) {
        try {
            return await DeviceModel.findAll({
                where: filter
            })
        } catch (error) {
            console.log('Erro ao selecionar por filtro varios device -', error.message)
        }
    }


    async update(device) {
        try {
            return await deviceModel.update(device, {
                where: {
                    id: device.id
                }
            })
        } catch (error) {
            console.log('Erro ao editar um device -', error.message)
        }
    }

    async remove(id) {
        try {
            return await DeviceModel.destroy({
                where: {
                    id
                }
            })
        } catch (error) {
            console.log('Erro ao remover um device -', error.message)
        }

    }
}

module.exports = DeviceRepository