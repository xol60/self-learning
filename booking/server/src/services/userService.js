const db = require('../models')
const bcrypt = require('bcrypt')
const saltRounds = 10;
let registerUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({
                where: {
                    email: data.email
                },
                raw: true
            })
            if (user) {
                resolve({
                    errorCode: 1,
                    data: {
                        message: 'Email has already been used'
                    }
                })
            }
            const { genderId, ...reUser } = {
                ...data,
                gender: data.genderId == '1' ? true : false,
                password: await bcrypt.hash(data.password, saltRounds),
                createdAt: new Date(),
                updatedAt: new Date()
            }
            await db.User.create(reUser)
            resolve({
                errorCode: 0,
                data: {
                    user: reUser,
                    message: 'Create user succeess'
                }
            })
        } catch (e) {
            resolve(e)
        }
    })
}
let getAllUser = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const users = await db.User.findAll({
                attributes: { exclude: ['password'] }
            });
            resolve({
                errorCode: 0,
                data: users
            })
        } catch (e) {
            reject(e)
        }
    })
}
let getUserById = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findByPk(id, {
                attributes: { exclude: ['password'] },
            });
            if (user) {
                resolve({
                    errorCode: 0,
                    data: user
                })
            }
            else {
                resolve({
                    errorCode: 1,
                    data: 'cannot find user'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
let updateUserById = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            const user = await db.User.findByPk(data.id)
            if (user) {
                user.firstName = data.data.firstName
                user.lastName = data.data.lastName
                user.address = data.data.address
                user.phoneNumber = data.data.phoneNumber
                user.updatedAt = new Date()
                await user.save()
                resolve({
                    errorCode: 0,
                    data: user
                })
            }
            else {
                resolve({
                    errorCode: 1,
                    data: 'cannot find user'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
let activeOrInactiveUserById = async (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findByPk(userId)
            if (user) {
                user.isActive = !user.isActive
                await user.save()
                resolve({
                    errorCode: 0,
                    data: 'ok'
                })
            } else {
                resolve({
                    errorCode: 1,
                    data: 'cannot find user'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    getAllUser: getAllUser,
    getUserById: getUserById,
    updateUserById: updateUserById,
    activeOrInactiveUserById: activeOrInactiveUserById,
    registerUser: registerUser
}