const express = require('express')
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')
const appController = require('../controllers/appController')
const doctorController = require('../controllers/doctorController')
const markdownController = require('../controllers/markdownController')
let router = express.Router();

let initWebRoutes = (app) => {
    router.post('/api/login', authController.userLogin)
    router.get('/api/get-all', userController.getAllUser)
    router.get('/api/get-user', userController.getUserById)
    router.post('/api/update-user', userController.updateUserById)
    router.post('/api/delete-user', userController.acOrInacUserById)
    router.post('/api/register-user', userController.registerUser)
    router.get('/api/get-codes', appController.getAllCodeInput)
    router.get('/api/doctors-get', doctorController.getAllDoctorsLimit)
    router.get('/api/doctors-name', doctorController.getNameDoctors)
    router.post('/api/markdown-add', markdownController.addNewMarkdown)
    router.get('/api/get-makedown-doctor-id', markdownController.getMarkDownDoctorById)
    router.post('/api/schedule-add', userController.addSchedules)
    router.get('/api/get-schedule', userController.getSchedule)
    router.get('/api/get-doctor-info', doctorController.getDoctorInfo)
    return app.use("/", router);
}

module.exports = initWebRoutes;