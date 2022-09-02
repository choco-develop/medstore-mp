import axios from 'axios';
import authHeader from './auth-header';
import API_URL from './index';

function getAuthUserDetail() {
  return axios.get(`${API_URL}/auth/user`, {
    headers: authHeader(),
  });
}

const headers = {
  'content-type': 'multipart/form-data',
  Authorization: authHeader(),
};

const userInfoReg = (data) => axios.post(
  `${API_URL}/accounts/user_info_reg/`,
  data,
  { headers },
).then((res) => Promise.resolve(res)).catch((err) => Promise.reject(err));

export default {
  getAuthUserDetail,
  userInfoReg,
};
