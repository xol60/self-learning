import actionTypes from '../actions/actionTypes';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const initialState = {
    roles: [],
    positions: [],
    users: [],
    doctors: [],
    times: [],
    infos: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data
            return {
                ...state
            }
        case actionTypes.FETCH_ROLE_FAIL:
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            toast('fetch positions success')
            state.positions = action.data
            return {
                ...state
            }
        case actionTypes.FETCH_POSITION_FAIL:
            console.log(action.data)
            return {
                ...state,
            }
        case actionTypes.ADD_NUSER_SUCCESS:
            toast("Add user success")
            return {
                ...state
            }
        case actionTypes.ADD_NUSER_FAIL:
            toast("add user fail")
            return {
                ...state,
            }
        case actionTypes.GET_USERS_SUCCESS:

            return {
                ...state,
                users: action.data
            }
        case actionTypes.GET_USERS_FAIL:
            toast('Get USERS FAIL')
            return {
                ...state,
            }
        case actionTypes.ADD_MARKDOWN_SUCCESS:
            toast('Add markdown success')
            return {
                ...state,
            }
        case actionTypes.GET_USERS_FAIL:
            toast('Add markdown fail')
            return {
                ...state,
            }
        case actionTypes.GET_DOCTORS_NAME_SUCCESS:
            return {
                ...state,
                doctors: action.data
            }
        case actionTypes.GET_DOCTORS_NAME_FAIL:
            toast('Get doctors fail')
            return {
                ...state,
            }
        case actionTypes.GET_TIMES_SUCCESS:

            return {
                ...state,
                times: action.data
            }
        case actionTypes.GET_TIMES_FAIL:
            toast('Get times fail')
            return {
                ...state,
            }
        case actionTypes.ADD_SCHEDULE_SUCCESS:
            toast('Add schedule success')
            return {
                ...state,
            }
        case actionTypes.ADD_SCHEDULE_FAIL:
            console.log(action)
            toast(action.data)
            return {
                ...state,
            }
        case actionTypes.GET_DOCTOR_INFO_SUCCESS:
            return {
                ...state,
                infos: action.data
            }
        case actionTypes.GET_DOCTOR_INFO_FAIL:
            toast('Get doctor info fail')
            return {
                ...state
            }
        default:
            return state;
    }
}

export default adminReducer;