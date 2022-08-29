import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAILER,
} from './type';
import AuthService from '../../services/auth-service';

export const register = (userDate) => (dispatch) => AuthService.register(userDate).then(
  (res) => {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    return Promise.resolve(res);
  },
  (err) => {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data,
    });
    return Promise.reject(err);
  },
);

export const activateAccount = (data) => (dispatch) => AuthService.activateAccount(data) //eslint-disable-line
  .then((res) => {
    dispatch({
      type: ACTIVATION_SUCCESS,
      payload: res.data,
    });
    return Promise.resolve(res);
  },
  (err) => {
    dispatch({
      type: ACTIVATION_FAILER,
      payload: err.response.data,
    });
    return Promise.reject(err);
  });

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
