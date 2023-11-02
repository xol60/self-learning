import axios from '../axios'
export function handleLoginApi(userEmail, userPassword) {

    return axios.post('/api/login', { email: userEmail, password: userPassword })
}
export function deleteUserApi(id) {
    return axios.post('/api/delete-user?id=' + id)
}
export function getAllCodeInput(typeInput) {
    return axios.get(`/api/get-codes?type=${typeInput}`)
}
export function registerUser(data) {
    return axios.post(`/api/register-user`, data)
}
export function getUsers() {
    return axios.get('/api/get-all')
}
export function addMarkdown(data) {
    return axios.post('/api/markdown-add', data)
}
export function addNewSchedules(data) {
    return axios.post('/api/schedule-add', data)
}
export function getSchedule(data) {
    return axios.get(`/api/get-schedule?doctorId=${data.doctorId}&date=${data.date}`)
}
export function getDoctorInfo(doctorId) {
    return axios.get(`/api/get-doctor-info?doctorId=${doctorId}`)
}