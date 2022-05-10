const express = require('express')
const DeviceControllers = require('../controllers/DeviceController')

const router = express.Router()

router.get('/', DeviceControllers.get)
router.get('/:id', DeviceControllers.getOne)
router.post('/', DeviceControllers.post)
router.put('/:id', DeviceControllers.put)
router.delete('/:id', DeviceControllers.delete)

module.exports = router