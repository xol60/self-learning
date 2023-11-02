import actionTypes from "./actionTypes";
import { getAllCodeInput, registerUser, getUsers, addMarkdown, addNewSchedules } from "../../services/userService";
import { getDoctorsName } from "../../services/homeService";
export const fetchRoleStart = () => {
    return (async (dispatch) => {
        try {
            const res = await getAllCodeInput('ROLE');
            if (res && res.errorCode == 0) {
                dispatch(fetchRoleSuccess(res.data))
            }
            else {
                dispatch(fetchRoleFail(res.data.message))
            }
        } catch (e) {
            dispatch(fetchRoleFail(e))
        }
    }
    )
}

export const fetchRoleSuccess = (dataInput) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: dataInput
})
export const fetchRoleFail = (message) => ({
    type: actionTypes.FETCH_ROLE_FAIL,
    data: message
})
export const fetchPositionStart = () => {
    return (async (dispatch) => {
        try {
            const res = await getAllCodeInput('POSITION');
            if (res && res.errorCode == 0) {
                dispatch(fetchPositionSuccess(res.data))
            }
            else {
                dispatch(fetchPositionFail(res.data.message))
            }
        } catch (e) {
            dispatch(fetchPositionFail(e))
        }
    }
    )
}

export const fetchPositionSuccess = (dataInput) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: dataInput
})
export const fetchPositionFail = (message) => ({
    type: actionTypes.FETCH_POSITION_FAIL,
    data: message
})
export const fetchAddUserStart = (data) => {
    return (async (dispatch) => {
        try {
            const res = await registerUser(data)

            if (res && res.errorCode == 0) {
                dispatch(fetchAddUserSuccess(res.data))
            }
            else {
                dispatch(fetchAddUserFail(res.data.message))
            }
        } catch (e) {
            dispatch(fetchAddUserFail(e))
        }
    }
    )
}

export const fetchAddUserSuccess = (dataInput) => ({
    type: actionTypes.ADD_NUSER_SUCCESS,
    data: dataInput
})
export const fetchAddUserFail = (message) => ({
    type: actionTypes.ADD_NUSER_FAIL,
    data: message
})
export const fetchGetUserStart = (data) => {
    return (async (dispatch) => {
        try {
            const res = await getUsers()

            if (res && res.errorCode == 0) {
                dispatch(fetchGetUserSuccess(res.data))
            }
            else {
                dispatch(fetchGetUserFail(res.data.message))
            }
        } catch (e) {
            dispatch(fetchGetUserFail(e))
        }
    }
    )
}

export const fetchGetUserSuccess = (dataInput) => ({
    type: actionTypes.GET_USERS_SUCCESS,
    data: dataInput
})
export const fetchGetUserFail = (message) => ({
    type: actionTypes.GET_USERS_FAIL,
    data: message
})

export const addMarkdownStart = (data) => {
    return (async (dispatch) => {
        try {
            const res = await addMarkdown({ ...data })
            console.log(res)
            if (res && res.errorCode == 0) {
                dispatch({
                    type: actionTypes.ADD_MARKDOWN_SUCCESS
                })
            }
            else {
                dispatch({
                    type: actionTypes.ADD_MARKDOWN_FAIL
                })
            }
        } catch (e) {
            dispatch({
                type: actionTypes.ADD_MARKDOWN_FAIL
            })
        }
    }
    )
}
export const getDoctorsNameList = () => {
    return (async (dispatch) => {
        try {
            const res = await getDoctorsName()
            if (res && res.errorCode == 0) {
                dispatch({
                    type: actionTypes.GET_DOCTORS_NAME_SUCCESS,
                    data: res.data
                })
            }
        } catch (e) {
            dispatch(actionTypes.GET_DOCTORS_NAME_FAIL)
        }
    })
}
export const getTimeList = () => {
    return (async (dispatch) => {
        try {
            const res = await getAllCodeInput('TIME')
            if (res && res.errorCode == 0) {
                dispatch({
                    type: actionTypes.GET_TIMES_SUCCESS,
                    data: res.data
                })
            }
        } catch (e) {
            dispatch({
                type: actionTypes.GET_TIMES_FAIL
            })
        }
    })
}
export const addListSchedules = (data) => {
    return (async (dispatch) => {
        try {
            const res = await addNewSchedules(data)
            if (res && res.errorCode == 0) {
                dispatch({
                    type: actionTypes.ADD_SCHEDULE_SUCCESS,
                })
            }
            else {

                dispatch({
                    type: actionTypes.ADD_SCHEDULE_FAIL,
                    data: res.data
                })
            }
        } catch (e) {
            dispatch({
                type: actionTypes.ADD_SCHEDULE_FAIL
            })
        }
    })
}
export const getInfoDoctor = () => {
    return (async (dispatch) => {
        try {
            const dataPrice = await getAllCodeInput('PRICE')
            const dataProvince = await getAllCodeInput('PROVINCE')
            const dataPayment = await getAllCodeInput('PAYMENT')
            if (dataPrice && dataPrice.errorCode == 0 && dataPrice && dataPayment && dataPrice.errorCode == 0 && dataPayment.errorCode == 0) {
                const dataDoctor = {
                    price: dataPrice.data,
                    province: dataProvince.data,
                    payment: dataPayment.data
                }
                dispatch({
                    type: actionTypes.GET_DOCTOR_INFO_SUCCESS,
                    data: dataDoctor
                })
            }
        } catch (e) {
            dispatch({
                type: actionTypes.GET_DOCTOR_INFO_FAIL
            })
        }
    })
}