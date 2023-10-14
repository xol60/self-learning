const express = require('express')
const homeController = require('../controllers')

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getRegisterPage);
    router.post('/post', homeController.register)
    router.get('/get-home', homeController.getHomePage)
    router.get('/update', homeController.updatePage)
    router.post('/update-user', homeController.updateUser)
    return app.use("/", router);
}

module.exports = initWebRoutes;