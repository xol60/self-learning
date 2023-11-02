const db = require('../models')
let getAllCode = (typeInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            const allCodeValid = await db.Allcode.findAll(
                {
                    where: {
                        type: typeInput
                    },
                    raw: true
                }
            )
            resolve({
                errorCode: 0,
                data: allCodeValid
            })
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    getAllCode
}