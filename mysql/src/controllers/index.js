const db = require('../models')
const userService = require('../services/user')
let getRegisterPage = async (req, res) => {
    res.render('registerPage.ejs')
}
let register = async (req, res) => {
    const message = await userService.registerUser(req.body)
    return res.send(message)
}
let getHomepage = async (req, res) => {
    const users = await userService.getUsers()
    return res.render('homePage.ejs', { users: users })
}
let updatePage = async (req, res) => {
    const user = await userService.getUserById(req.query.id)
    return res.render('updatePage.ejs', { user: user })
}
let updateUser = async (req, res) => {
    const message = await userService.updateUser({ data: req.body, id: req.query.id })
    res.redirect('/get-home')
}
module.exports = {
    getRegisterPage: getRegisterPage,
    register: register,
    getHomePage: getHomepage,
    updatePage: updatePage,
    updateUser: updateUser

}