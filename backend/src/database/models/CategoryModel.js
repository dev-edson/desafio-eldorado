const { Sequelize } = require('sequelize')
const database = require('../index')

const CategoryModel = database.define('categories', {
    category_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    category_name: {
        type: Sequelize.STRING(128),
        allowNull: false,
    }
}, { timestamps: false })

module.exports = CategoryModel
