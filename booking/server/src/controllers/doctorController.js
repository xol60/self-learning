const doctorSevice = require('../services/doctorService')
const getAllDoctorsLimit = async (req, res) => {
    const data = await doctorSevice.getLimitDoctors(req.query.limit)
    res.status(200).send(data)
}
const getNameDoctors = async (req, res) => {
    const data = await doctorSevice.getNameDoctors()
    res.status(200).send(data)
}
const getDoctorInfo = async (req, res) => {
    const data = await doctorSevice.getDoctorInfo(req.query.doctorId)
    res.status(200).send(data)
}
module.exports = {
    getAllDoctorsLimit,
    getNameDoctors,
    getDoctorInfo
}