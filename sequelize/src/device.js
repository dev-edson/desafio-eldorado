const { Sequelize } = require('sequelize')
const database = require('./database')

const Device = database.define('devices', {
    device_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    device_color: {
        type: Sequelize.STRING,
        allowNull: false
    },
    device_partnumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { timestamp: false })

module.exports = Device
