const express = require('express');
const routes = express.Router();
const fibonacciController = require('../controllers/fibonacciController');
const userController = require('../controllers/usersController')

routes.get('/fibonacci', fibonacciController.getFibonacci)
routes.get('/users', userController.getUser)
routes.get('/users/:ID', userController.getUserById)
routes.post('/users', userController.postUser)
routes.put('/users/:ID', userController.putUser)
routes.delete('/users/:ID', userController.deleteUser)

module.exports = routes;