import axios from 'axios';
import API_URL from './index';

const register = (userData) => axios.post(`${API_URL}/accounts/user_signup/`, userData)
  .then((res) => res.data)
  .catch((err) => err);
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
