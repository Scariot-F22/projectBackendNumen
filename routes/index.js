const express = require('express');
const routes = express.Router();
const fibonacciController = require('../controllers/fibonacciController');
const userController = require('../controllers/usersController')

routes.get('/fibonacci', fibonacciController.getFibonacci)
routes.get('/users', userController.getUser)
routes.post('/users', userController.postUser)
routes.put('/users', userController.putUser)
routes.delete('/users', userController.deleteUser)

module.exports = routes;