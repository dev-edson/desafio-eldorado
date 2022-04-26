const Category = require('../database/models/Category')

class CategoryRepository {
    async add(category) {
        try {
            return await Category.create(category)
        } catch (error) {
            console.log('Erro ao salvar uma categoria -', error.message)
        }
    }

    async selectAll() {
        try {
            return await Category.findAll()
        } catch (error) {
            console.log('Erro ao selecionar varias categoria -', error.message)
        }
    }

    async selectByFilter(filtro) {
        try {
            return await Category.findAll({
                where: filtro
            })
        } catch (error) {
            console.log('Erro ao selecionar por filtro varias categoria -', error.message)
        }
    }


    async update(category) {
        try {
            return await Category.create(category)
        } catch (error) {
            console.log('Erro ao editar uma categoria -', error.message)
        }

    }

    async remove(id) {
        try {
            return await Category.destroy({
                where: {
                    id
                }
            })
        } catch (error) {
            console.log('Erro ao remover uma categoria -', error.message)
        }

    }
}

module.exports = CategoryRepository