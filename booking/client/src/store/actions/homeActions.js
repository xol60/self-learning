import actionTypes from "./actionTypes";
import { getDoctors, getDoctorContent } from "../../services/homeService";
import { getSchedule } from "../../services/userService";
export const getLimitDoctors = (limitInput) => {
    return (async (dispatch) => {
        try {
            const res = await getDoctors(limitInput)
            console.log(res)
            if (res && res.errorCode == 0) {
                dispatch({
                    type: actionTypes.GET_DOCTORS_SUCCESS,
                    data: res.data
                })
            }
            else {
                dispatch({
                    type: actionTypes.GET_DOCTORS_FAIL
                })
            }
        } catch (e) {
            dispatch({
                type: actionTypes.GET_DOCTORS_FAIL
            })
        }
    }
    )
}
export const getDoctorMarkdown = (id) => {
    return (
        async (dispatch) => {
            try {
                const res = await getDoctorContent(id)
                if (res && res.errorCode == 0) {
                    dispatch({
                        type: actionTypes.GET_DOCTOR_CONTENT_SUCCESS,
                        data: res.data
                    })
                }
                else {
                    dispatch({
                        type: actionTypes.GET_DOCTOR_CONTENT_FAIL
                    })
                }

            } catch (e) {
                dispatch({
                    type: actionTypes.GET_DOCTOR_CONTENT_FAIL
                })
            }
        }
    )
}
export const getScheduleByDate = (data) => {
    return (
        async (dispatch) => {
            try {
                const res = await getSchedule(data)
                if (res && res.errorCode == 0) {
                    return res.data
                }
                else {
                    dispatch({
                        type: actionTypes.GET_SCHEDULE_FAIL,
                        data: res.data
                    })
                }
            } catch (e) {
                dispatch({
                    type: actionTypes.GET_SCHEDULE_FAIL
                })
            }
        }
    )
}