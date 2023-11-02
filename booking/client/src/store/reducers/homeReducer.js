import actionTypes from '../actions/actionTypes';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const initialState = {
    doctors: [],
    doctor: {}
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DOCTORS_SUCCESS:
            return {
                ...state,
                doctors: action.data
            }
        case actionTypes.FETCH_ROLE_FAIL:
            toast('get doctors fail')
            return {
                ...state,
            }
        case actionTypes.GET_DOCTOR_CONTENT_SUCCESS:
            return {
                ...state,
                doctor: action.data
            }
        case actionTypes.GET_DOCTOR_CONTENT_FAIL:
            toast('get doctor fail')
            return {
                ...state
            }
        case actionTypes.GET_SCHEDULE_FAIL:
            toast('get schedule fail')
            return {
                ...state
            }
        default:
            return state;
    }
}

export default homeReducer;