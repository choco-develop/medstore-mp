import {
  USER_INFO_REG_SUCCESS,
  USER_INFO_REG_FAILER,
} from './type';
import userService from '../../services/user-service';

const userInforDetail = (data) => (dispatch) => userService.userInfoReg(data).then(
  (res) => {
    dispatch({
      type: USER_INFO_REG_SUCCESS,
      payload: res.data,
    });
    return Promise.resolve(res);
  },
  (err) => {
    dispatch({
      type: USER_INFO_REG_FAILER,
      payload: err.response.data,
    });
    return Promise.reject(err);
  },
);

export default userInforDetail;
