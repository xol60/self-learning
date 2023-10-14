const db = require('../models')
const bcrypt = require('bcrypt')
const saltRounds = 10;
let registerUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { genderId, ...user } = {
                ...data,
                gender: data.genderId == '1' ? true : false,
                password: await bcrypt.hash(data.password, saltRounds),
                createdAt: new Date(),
                updatedAt: new Date()
            }
            console.log(user)
            await db.User.create(user)
            resolve('oke')
        } catch (e) {
            resolve(e)
        }
    })
}
let getUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const users = await db.User.findAll({ raw: true })
            resolve(users)
        } catch (e) {
            reject(null)
        }
    })
}
let getUserById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findByPk(id)
            resolve(user)
        } catch (e) {
            reject(e)
        }
    })
}
let updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data.data)
            const user = await db.User.findByPk(data.id)
            user.firstName = data.data.firstName
            user.lastName = data.data.lastName
            user.address = data.data.address
            user.phoneNumber = data.data.phoneNumber
            user.updatedAt = new Date()
            console.log(user)
            await user.save()
            resolve('ok')
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    registerUser: registerUser,
    getUsers: getUsers,
    getUserById: getUserById,
    updateUser: updateUser
}