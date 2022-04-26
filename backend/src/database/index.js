//Index.js do database do src
const { Sequelize } = require('sequelize')
//const configDatabase = require('../config/database')

const sequelize = new Sequelize({
    database: 'device_manager',
    username: 'root',
    password: 'fullstack',
    dialect: 'mysql',
    host: 'localhost',
    port: 3307
})

module.exports = sequelize

