const db = require('../models')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const moment = require('moment')
const sequelize = require('../config/connectDB')
const _ = require('lodash')
const { Op } = require('sequelize');
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
                gender: data.genderId,
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
let addScheduleslist = (listSchedule) => {
    return new Promise(async (resolve, reject) => {
        try {
            const existSchedule = await db.Schedule.findAll(
                {
                    attributes: ['doctorId', 'date', 'timeType'],
                    raw: true
                }
            )
            console.log(listSchedule)
            const eSchedule = existSchedule.map(schedule => ({
                doctorId: schedule.doctorId + '',
                date: moment(schedule.date).format('MM/DD/YYYY'),
                timeType: schedule.timeType
            }))
            const data = listSchedule.map(schedule => ({
                ...schedule,
                maxNumber: 10,
                currentNumber: 0
            }))
            let newArray = _.differenceWith(
                listSchedule, eSchedule, _.isEqual);
            if (newArray.length != data.length) {
                resolve({
                    errorCode: 1,
                    data: 'Schedule has already been created'
                })
            }
            else {
                const dataSchedule = await db.Schedule.bulkCreate(data)
                resolve({
                    errorCode: 0
                })
            }
        } catch (e) {
            console.log(e)
            reject(e)
        }
    })
}
let getScheduleByDate = (data) => {
    return (
        new Promise(async (resolve, reject) => {
            try {
                console.log(data.date)
                const schedules = await db.Schedule.findAll({
                    where: {
                        doctorId: +data.doctorId,
                        [Op.and]: [
                            sequelize.where(sequelize.fn('date', sequelize.col('date')), '=', data.date),
                        ]
                    },
                    include: [{ model: db.Allcode, as: 'timeData', attributes: ['valueEn', 'valueVi'], raw: true }],

                })

                resolve({
                    errorCode: 0,
                    data: schedules
                })
            } catch (e) {
                reject(e)
            }
        })
    )

}
module.exports = {
    getAllUser: getAllUser,
    getUserById: getUserById,
    updateUserById: updateUserById,
    activeOrInactiveUserById: activeOrInactiveUserById,
    registerUser: registerUser,
    addScheduleslist: addScheduleslist,
    getScheduleByDate: getScheduleByDate
}