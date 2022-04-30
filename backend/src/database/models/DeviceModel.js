const { Sequelize } = require('sequelize')
const database = require('../index')
const CategoryModel = require('./CategoryModel')

const DeviceModel = database.define('devices', {
    device_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    device_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    device_color: {
        type: Sequelize.STRING(16),
        allowNull: false
    },
    device_partnumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { timestamps: false })

DeviceModel.belongsTo(CategoryModel, {
    foreignKey: 'device_category_id'
})

CategoryModel.hasMany(DeviceModel, {
    foreignKey: 'device_category_id'
})


module.exports = DeviceModel
