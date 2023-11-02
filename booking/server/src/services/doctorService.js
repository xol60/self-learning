const db = require('../models')
const getLimitDoctors = (limitInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            const doctors = await db.User.findAll({
                limit: +limitInput,
                order: [['createdAt', 'DESC']],
                attributes: { exclude: ['password'] },
                include: { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] },
                where: {
                    roleId: 'R2'
                }
            })
            resolve({
                errorCode: 0,
                data: doctors
            })
        } catch (e) {
            reject(e)
        }
    })
}
const getNameDoctors = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const doctorsName = await db.User.findAll({
                attributes: ['firstName', 'lastName', 'id'],
                include:
                    { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] },
                where: {
                    roleId: 'R2'
                }
            })
            resolve({
                errorCode: 0,
                data: doctorsName
            })
        } catch (e) {
            reject(e)
        }
    })
}
let getDoctorInfo = (inputDoctorId) => {
    return (
        new Promise(async (resolve, reject) => {
            try {
                const dataResponse = await db.Doctor_Info.findOne({
                    include: [
                        { model: db.Allcode, as: 'provinceData', attributes: ['valueEn', 'valueVi'] },
                        { model: db.Allcode, as: 'priceData', attributes: ['valueEn', 'valueVi'] },
                        { model: db.Allcode, as: 'paymentData', attributes: ['valueEn', 'valueVi'] }
                    ],
                    where: {
                        doctorId: +inputDoctorId
                    }
                })
                resolve({
                    errorCode: 0,
                    data: dataResponse
                })
            } catch (e) {
                reject(e)
            }
        })
    )
}
module.exports = {
    getLimitDoctors,
    getNameDoctors,
    getDoctorInfo
}