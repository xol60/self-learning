import axios from '../axios'
export function addNewBooking(data) {
    return axios.post('/api/add-booking', data)
}