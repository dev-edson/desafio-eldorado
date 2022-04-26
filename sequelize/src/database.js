const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('device_managers', 'root', 'fullstack', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3307
})

module.exports = sequelize