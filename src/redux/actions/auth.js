import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from './type';
import AuthService from '../../services/auth-service';

export const register = (userDate) => (dispatch) => AuthService.register(userDate).then(
  (res) => {
    dispatch({
      type: REGISTER_SUCCESS,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: res,
    });
    return Promise.resolve(res);
  },
  (err) => {
    const { data } = err.response;
    dispatch({
      type: REGISTER_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: data,
    });
    return Promise.reject();
  },
);

export const login = (username, password) => (dispatch) => AuthService.login(username, password)
  .then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
      return Promise.resolve();
    },
    (err) => {
      console.log(err);
      const { non_field_errors: message } = err.response.data;
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    },
  );

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};
