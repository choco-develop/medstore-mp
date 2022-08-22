import axios from 'axios';
import authHeader from './auth-header';
import API_URL from './index';

function getAuthUserDetail() {
  return axios.get(`${API_URL}/auth/user`, {
    headers: authHeader(),
  });
}

function getUserDetail(id) {
  return axios.get(`${API_URL}/users/1`, {
    headers: authHeader(),
  });
}

export default {
  getAuthUserDetail,
  getUserDetail,
};
