import axios from '../axios'
export function handleLoginApi(userEmail, userPassword) {

    return axios.post('/api/login', { email: userEmail, password: userPassword })
}
export function deleteUserApi(id) {
    return axios.post('/api/delete-user?id=' + id)
}