const { Sequelize } = require('sequelize')
const database = require('../database')
const Category = require('./Category')

const Device = database.define('device', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'device_id'
    },
    category_id: {
        type: Sequelize.INTEGER,
        field: 'device_category_id'
    },
    color: {
        type: Sequelize.STRING(16),
        allowNull: false,
        field: 'device_color'
    },
    partnumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'device_partnumber'
    }
}, {
    timestamp: false,
    tableName: 'devices',
})

Device.belongsTo(Category, {
    foreignKey: 'category_id'
})

Device.hasMany(Device, {
    foreignKey: 'device_id'
})


module.exports = Category
