import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAILER,
} from '../actions/type';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? {
    isLoggedIn: true,
    user,
    message: null,
    activationStatus: null,
  }
  : {
    isLoggedIn: false,
    user: null,
    message: null,
    activationStatus: null,
  };

export default function authReducer(state = initialState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        message: { isError: false, data: payload },
        activationStatus: null,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        message: { isError: true, data: payload },
        activationStatus: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        message: payload,
        activationStatus: null,
      };
    case ACTIVATION_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: null,
        message: payload,
        activationStatus: true,
      };
    case ACTIVATION_FAILER:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        message: payload,
        activationStatus: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        message: payload,
        activationStatus: false,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        message: payload,
        activationStatus: false,
      };
    default:
      return state;
  }
}
