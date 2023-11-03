const db = require('../models')
const paitentService = require('../services/paitentService')
let addNewBooking = async (req, res) => {
    const data = await paitentService.addNewBooking({ ...req.body })
    res.status(200).send(data)
}
module.exports = {
    addNewBooking: addNewBooking
}