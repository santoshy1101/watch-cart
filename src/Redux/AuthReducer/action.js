//Write the ActionCreator functions here

import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionTypes"


const loginRequestAction=()=>{
    return {type:LOGIN_REQUEST}
}
const loginSuccessAction=(payload)=>{
    return {type:LOGIN_SUCCESS,payload}
}
const loginFailureAction=()=>{
    return {type:LOGIN_FAILURE}
}

const logoutSuccessAction=()=>{
    return {type:LOGOUT_SUCCESS}
}

export const login =(loginData)=>(dispatch)=>{
    dispatch(loginRequestAction())
   return axios.post("https://reqres.in/api/register",loginData).then((res)=>{
        dispatch(loginSuccessAction(res.data.token))
    }).catch((err)=>{
        dispatch(loginFailureAction())
    })
}

export const logout=()=>(dispatch)=>{

    dispatch(logoutSuccessAction())
}