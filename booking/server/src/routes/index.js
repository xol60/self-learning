const express = require('express')
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')
let router = express.Router();

let initWebRoutes = (app) => {
    router.post('/api/login', authController.userLogin)
    router.get('/api/get-all', userController.getAllUser)
    router.get('/api/get-user', userController.getUserById)
    router.post('/api/update-user', userController.updateUserById)
    router.post('/api/delete-user', userController.acOrInacUserById)
    router.post('/api/register-user', userController.registerUser)
    return app.use("/", router);
}

module.exports = initWebRoutes;