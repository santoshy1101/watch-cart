import {
  ADD_WATCHES,
  GET_WATCHES_DATA_FAILURE,
  GET_WATCHES_DATA_REQUEST,
  GET_WATCHES_DATA_SUCCESS,
  REMOVE_WATCHES,
} from './actionType'

// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  watches: [],
  isLoading: false,
  isError: false,
  addWatchesData:[]
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WATCHES_DATA_REQUEST:
      return { ...state, isLoading: true }
    case GET_WATCHES_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        watches: payload,
      }
    case GET_WATCHES_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
      case ADD_WATCHES:
        return {
          ...state,addWatchesData:[...state.addWatchesData,payload]
        }
      case REMOVE_WATCHES:
        return {
          ...state,addWatchesData:payload
        }
    default:
      return state
  }
}

export { reducer }
