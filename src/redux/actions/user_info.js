import {
  USER_INFO_REG_SUCCESS,
  USER_INFO_REG_FAILER,
  COMPANY_INFO_REG_SUCCESS,
  COMPANY_INFO_REG_FAILER,
} from './type';
import userService from '../../services/user-service';

const userInforDetail = (data) => (dispatch) => userService.userInfoReg(data).then(
  (res) => {
    if (Object.hasOwn(res, 'data') && !res.data.err) {
      dispatch({
        type: USER_INFO_REG_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: USER_INFO_REG_FAILER,
        payload: res.data,
      });
    }
    return Promise.resolve(res);
  },
  (err) => {
    if (err.response.status === 401) {
      dispatch({
        type: USER_INFO_REG_FAILER,
        payload: { err: true, msg: 'Unauthorised access' },
      });
    }
    if (err.response.status === 500) {
      dispatch({
        type: USER_INFO_REG_FAILER,
        payload: { err: true, msg: 'Servor error: make sure you fill all fields!!!' },
      });
    } else {
      dispatch({
        type: USER_INFO_REG_FAILER,
        payload: { err: true, msg: 'Unknow error occured' },
      });
    }
    return Promise.reject(err);
  },
);

export const companyInfo = (data) => (dispatch) => userService.companyInfoReg(data).then(
  (res) => {
    if (Object.hasOwn(res, 'data') && !res.data.err) {
      dispatch({
        type: COMPANY_INFO_REG_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: COMPANY_INFO_REG_FAILER,
        payload: res.data,
      })
    }
    return Promise.resolve(res);
  },
  (err) => {
    if (err.response.status === 500) {
      dispatch({
        type: USER_INFO_REG_FAILER,
        payload: { err: true, msg: 'Servor error: make sure you fill all fields!!!' },
      });
    } else {
      dispatch({
        type: USER_INFO_REG_FAILER,
        payload: { err: true, msg: 'Unknow error occured' },
      });
    }
    return Promise.reject(err);
  },
);


export default userInforDetail;
