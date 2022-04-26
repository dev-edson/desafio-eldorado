const { Sequelize } = require('sequelize')
const database = require('../database')

const Category = database.define('category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'category_id'
    },
    name: {
        type: Sequelize.STRING(128),
        allowNull: false,
        field: 'category_name'
    },
}, {
    timestamps: false,
    tableName: 'categories'
})

module.exports = Category
