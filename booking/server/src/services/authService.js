const db = require('../models')
const bcrypt = require('bcrypt')
let authenticationLogin = async (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = {}
            let validUser = await db.User.findOne({
                where: {
                    email: email
                },
                raw: true
            })
            if (validUser) {
                const validPassword = await bcrypt.compareSync(password, validUser.password)

                if (validPassword) {
                    delete validUser.password
                    data = {
                        errorCode: 0,
                        message: 'allright',
                        user: validUser
                    }
                } else {
                    data = {
                        errorCode: 2,
                        message: 'Invalid email or password'
                    }
                }
            } else {
                data = {
                    errorCode: 2,
                    message: 'Invalid email or password'
                }
            }
            resolve(data)
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    authenticationLogin,
}