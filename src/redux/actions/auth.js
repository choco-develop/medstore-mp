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
    console.log('redux/actions/auth :success', res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    return Promise.resolve(res);
  },
  (err) => {
    console.log('redux/actions/auth :error', err);
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data,
    });
    return Promise.reject(err);
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
