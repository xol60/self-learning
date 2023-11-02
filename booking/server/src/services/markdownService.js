const db = require('../models')
const addNewMarkdown = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data)
            await db.Markdown.create({
                doctorId: data.doctorId,
                contentDescription: data.contentDescription,
                contentQuill: data.contentQuill,

            })
            await db.Doctor_Info.create({
                provinceId: data.selectedProvince,
                paymentId: data.selectedPayment,
                priceId: data.selectedPrice,
                clinicName: data.clinicName,
                clinicAddress: data.clinicAddress,
                note: data.note,
                doctorId: data.doctorId

            })
            resolve({
                errorCode: 0,
                data: 'ok'
            })
        } catch (e) {
            console.log(e)
            reject({
                errorCode: 1,
                data: e
            })
        }
    })
}
const getMarkDownDoctorById = (idInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (idInput) {
                const markdown = await db.User.findOne({
                    attributes: {
                        exclude: ['password', 'id']
                    },
                    where: {
                        id: +idInput,
                    },
                    include: [{ model: db.Markdown, attributes: { exclude: ['doctorId', 'positionId', 'clinicId', 'id'] } },
                    { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] }]
                })
                if (markdown) {
                    resolve({
                        errorCode: 0,
                        data: markdown
                    })
                } else {
                    resolve({
                        errorCode: 1,
                        message: 'Id is not valid'
                    })
                }
            } else {
                resolve({
                    errorCode: 1,
                    message: 'Id is not valid'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    addNewMarkdown,
    getMarkDownDoctorById
}
