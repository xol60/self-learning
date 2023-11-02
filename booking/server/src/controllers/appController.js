const appSerivce = require('../services/appService')
let getAllCodeInput = async (req, res) => {
    console.log(req.query.type)
    const data = await appSerivce.getAllCode(req.query.type)
    res.status(200).send(data)
}
module.exports = {
    getAllCodeInput
}