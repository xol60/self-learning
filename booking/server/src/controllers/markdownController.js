const markdownService = require('../services/markdownService')
let addNewMarkdown = async (req, res) => {
    const data = await markdownService.addNewMarkdown(req.body)
    res.status(200).send(data)
}
let getMarkDownDoctorById = async (req, res) => {
    const data = await markdownService.getMarkDownDoctorById(req.query.id)
    res.status(200).send(data)
}
module.exports = {
    addNewMarkdown: addNewMarkdown,
    getMarkDownDoctorById
}