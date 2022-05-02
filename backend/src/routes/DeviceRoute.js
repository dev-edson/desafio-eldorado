const { Router } = require('express')
const DevicesControllers = require('../controllers/DevicesController')

const router = new Router()

//Buscar devices
router.get('/', DevicesControllers.get)

//Buscar um device
router.get('/:id', DevicesControllers.getOne)

//Adicionar um carro
router.post('/', DevicesControllers.post)

//Atualizar um device
router.put('/:id', DevicesControllers.put)

//Deletar um device
router.delete('/:id', DevicesControllers.delete)

exports = router