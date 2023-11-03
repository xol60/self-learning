const db = require('../models')
const sequelize = require('../config/connectDB')
const { Op } = require('sequelize');
let addNewBooking = async (data) => {
    return (
        new Promise(async (resolve, reject) => {
            try {
                const formatDate = data.date
                console.log(formatDate)
                const result = await db.User.findOrCreate({
                    where: {
                        email: data.email
                    },
                    defaults: {
                        email: data.email,
                        roleId: 'R3',
                        address: data.address,
                        phoneNumber: data.phoneNumber,
                        lastName: data.lastName,
                        gender: data.gender,

                    },
                    raw: true
                })
                const user = result[0]
                const booking = await db.Booking.findOrCreate({
                    where: {
                        doctorId: data.doctorId,
                        patientId: user.id,
                        timeType: data.timeType,
                        [Op.and]: [
                            sequelize.where(sequelize.fn('date', sequelize.col('date')), '=', formatDate),
                        ]
                    },
                    defaults: {
                        doctorId: data.doctorId,
                        patientIdp: data.paitentId,
                        timeType: data.timeType,
                        date: formatDate,
                        forWho: data.forWho,
                        reason: data.reason,
                        statusId: 'S1'
                    }
                })
                if (booking[1]) {
                    resolve({
                        errorCode: 0,
                        data: 'create sucess'
                    })
                } else {
                    resolve({
                        errorCode: 0,
                        data: 'have already been created'
                    })
                }
            }
            catch (e) {
                reject(e)
            }
        }
        ))
}

module.exports = {
    addNewBooking
}