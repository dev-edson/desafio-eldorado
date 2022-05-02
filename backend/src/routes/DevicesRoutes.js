const express = require('express')
const DevicesControllers = require('../controllers/DevicesController')

const router = express.Router()

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

module.exports = router