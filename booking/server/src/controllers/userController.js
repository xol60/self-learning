const db = require('../models')
const userService = require('../services/userService')
let getAllUser = async (req, res) => {
    const users = await userService.getAllUser()

    res.status(200).send(users)
}
let getUserById = async (req, res) => {
    const user = await userService.getUserById(req.query.id)
    res.status(200).send(user)
}
let updateUserById = async (req, res) => {
    const user = await userService.updateUserById({ data: req.body, id: req.query.id })
    res.status(200).send(user)
}
let acOrInacUserById = async (req, res) => {
    const data = await userService.activeOrInactiveUserById(req.query.id)
    res.status(200).send(data)
}
let registerUser = async (req, res) => {
    const data = await userService.registerUser(req.body)
    return res.status(200).send(
        data
    )
}
let addSchedules = async (req, res) => {
    const data = await userService.addScheduleslist(req.body)
    return res.status(200).send(data)
}
let getSchedule = async (req, res) => {
    const data = await userService.getScheduleByDate({
        doctorId: req.query.doctorId,
        date: req.query.date
    })
    return res.status(200).send(data)
}
module.exports = {
    getAllUser: getAllUser,
    getUserById: getUserById,
    updateUserById: updateUserById,
    acOrInacUserById: acOrInacUserById,
    registerUser: registerUser,
    addSchedules: addSchedules,
    getSchedule: getSchedule
}