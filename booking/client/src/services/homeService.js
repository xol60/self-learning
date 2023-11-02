import axios from "../axios";
export const getDoctors = (input) => {
    return axios.get(`/api/doctors-get?limit=${input}`)
}
export const getDoctorsName = () => {
    return axios.get('/api/doctors-name')
}
export const getDoctorContent = (id) => {
    return axios.get('/api/get-makedown-doctor-id?id=' + id)
}