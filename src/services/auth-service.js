import axios from 'axios';
import API_URL from './index';

const register = (userData) => axios.post(`${API_URL}/accounts/user_signup/`, userData,
  {
    headers: {
      'content-type': 'multipart/form-data',
    },
  })
  .then((res) => Promise.resolve(res))
  .catch((err) => Promise.reject(err));

const login = (username, password) => axios.post(`${API_URL}/accounts/login/`, {
  username,
  password,
})
  .then((res) => {
    if (res.data.token) {
      localStorage.setItem('user', JSON.stringify(res.data));
    }
    return res.data;
  });

const logout = () => {
  localStorage.removeItem('user');
};

export default { register, login, logout };
