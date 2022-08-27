import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/type';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? { isLoggedIn: true, user, message: null }
  : { isLoggedIn: false, user: null, message: null };

export default function authReducer(state = initialState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        message: { isError: false, data: payload },
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        message: { isError: true, data: payload },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        message: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        message: payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        message: payload,
      };
    default:
      return state;
  }
}
