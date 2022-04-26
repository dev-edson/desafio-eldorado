//index.js do erc
const CategoryRepository = require('./repositories/CategoryRepository')

const Device = require('./database/models/device')

async function main() {
    const categoryRepository = new CategoryRepository()

    //await categoryRepository.add({ name: 'intermediaria' })

    //Inserir um novo device
    //const device = await Device.create({
    //    category_id: 1,
    //    color: 'Amarela',
    //    partnumber: 123456
    //})

    //Seleciona os devices
    //const devices = await Device.findAll()

    const devices = await Device.findAll({ include: [{ model: Category }] })
    console.log(devices)
}


main()