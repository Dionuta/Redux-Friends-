import {
    LOGIN_START,
    LOGIN_RESOLVED,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
    
  } from "../actions";
  

const initialState = {
  friends: [],
  isloggingIn: false,
  error: '',
  fetchingData: false,
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
        return {
          ...state,
          isLoggingIn: true
        };
      }
      case LOGIN_RESOLVED: {
        return {
          ...state,
          isLoggingIn: false
        };
      }
        case FETCH_DATA_START:
        return {
          ...state,
          error: "",
          fetchingData: true
        };
        case FETCH_DATA_SUCCESS:
        console.log(action.payload);
        return {
          ...state,
          error: "",
          fetchingData: false,
          friends: action.payload
        }
    default:
      return state;
  }
};

export default friendsReducer;
