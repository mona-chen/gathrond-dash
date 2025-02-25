import axios from './axios';
import { getCookie } from './helper/Helper';

const setAuthToken = () => {
  let token = getCookie('token');

  console.log(token, 'the token'); // Debugging: Check token value

  if (token) {
    try {
      const parsedToken = JSON.parse(token);
      axios.defaults.headers.common = {
        Authorization: `Bearer ${parsedToken}`,
        redirect: 'follow',
      };
    } catch (error) {
      console.error('Invalid token format:', error);
    }
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
