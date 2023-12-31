const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
    //admin
    FETCH_ROLE_START: 'FETCH_ROLE_START',
    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAIL: 'FETCH_ROLE_FAIL',
    FETCH_POSITION_SUCCESS: 'FETCH_POSITION_SUCCESS',
    FETCH_POSITION_FAIL: 'FETCH_POSITION_FAIL',
    FETCH_STATUS: 'FETCH_STATUS',
    FETCH_TIME: 'FETCH_TIME',
    ADD_NUSER_SUCCESS: 'ADD_NUSER_SUCCESS',
    ADD_NUSER_FAIL: 'ADD_NUSER_FAIL',
    GET_USER_START: 'GET_USER_START',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    GET_USERS_FAIL: 'GET_USERS_FAIL',
    GET_DOCTORS_SUCCESS: 'GET_DOCTORS_SUCCESS',
    GET_DOCTORS_FAIL: 'GET_DOCTORS_FAIL',
    ADD_MARKDOWN_SUCCESS: 'ADD_MARKDOWN_SUCCESS',
    ADD_MARKDOWN_FAIL: 'ADD_MARKDOWN_FAIL',
    GET_DOCTORS_NAME_SUCCESS: 'GET_DOCTORS_NAME_SUCCESS',
    GET_DOCTORS_NAME_FAIL: 'GET_DOCTORS_NAME_FAIL',
    GET_DOCTOR_CONTENT_SUCCESS: 'GET_DOCTOR_CONTENT_SUCCESS',
    GET_DOCTOR_CONTENT_FAIL: 'GET_DOCTOR_CONTENT_FAIL',
    GET_TIMES_SUCCESS: 'GET_TIMES_SUCCESS',
    GET_TIMES_FAIL: 'GET_TIMES_FAIL',
    ADD_SCHEDULE_SUCCESS: 'ADD_SCHEDULE_SUCCESS',
    ADD_SCHEDULE_FAIL: 'ADD_SCHEDULE_FAIL',
    GET_SCHEDULE_SUCCESS: 'GET_SCHEDULE_SUCCESS',
    GET_SCHEDULE_FAIL: 'GET_SCHEDULE_FAIL',
    GET_DOCTOR_INFO_FAIL: 'GET_DOCTOR_INFO_FAIL',
    GET_DOCTOR_INFO_SUCCESS: 'GET_DOCTOR_INFO_SUCCESS',
    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT'
})

export default actionTypes;