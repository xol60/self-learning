const authService = require('../services/authService')
let userLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({
            errorCode: 1,
            message: 'Email and password cannot be empty'
        })
    }
    const userData = await authService.authenticationLogin(email, password)
    if (userData.errorCode == 0) {
        res.status(200).send(userData)
    }
    else {
        res.status(400).send(userData)
    }
}
module.exports = {
    userLogin,
}