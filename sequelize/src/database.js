const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('device_manager', 'root', 'fullstack', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3307
})

module.exports = sequelize