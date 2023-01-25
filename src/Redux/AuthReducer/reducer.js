import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionTypes";

// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState,{type,payload}) => {
  switch(type){

    case LOGIN_REQUEST:
      return {...state, isLoading:true};
    case LOGIN_SUCCESS:
      return {...state, isLoading:false, token:payload, isAuth:true};
    case LOGIN_FAILURE:
      return {...state, isLoading:false, isError:true}
      case LOGOUT_SUCCESS:
        return {...state, isLoading:false, isAuth:false};
    default:
      return state;
  }
  
};

export { reducer };
