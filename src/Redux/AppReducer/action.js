import axios from "axios"
import { ADD_WATCHES, GET_WATCHES_DATA_FAILURE, GET_WATCHES_DATA_REQUEST, GET_WATCHES_DATA_SUCCESS, REMOVE_WATCHES } from "./actionType"

//Write the ActionCreator functions here
const getWatchRequestAction=()=>{
    return {type:GET_WATCHES_DATA_REQUEST}
}
const getWatchSuccessAction=(payload)=>{
    
    return {type:GET_WATCHES_DATA_SUCCESS,payload}
}
const getWatchFailureAction=()=>{
    return {type:GET_WATCHES_DATA_FAILURE}
}
const addWatchesInCart=(payload)=>{
    return {type:ADD_WATCHES,payload}
}
const removeWatchesInCart=(payload)=>{
    return {type:REMOVE_WATCHES,payload}
}

export const getWatches=(param={})=>(dispatch)=>{
    dispatch(getWatchRequestAction())
    axios.get(`http://localhost:8080/watches`,param).then((res)=>{
        dispatch(getWatchSuccessAction(res.data))
    }).catch((err)=>{
        dispatch(getWatchFailureAction())
    })
}


export const addWatches=(item)=>(dispatch)=>{
    dispatch(addWatchesInCart(item))
}
export const removeWatches=(item)=>(dispatch)=>{

    dispatch(removeWatchesInCart(item))
}