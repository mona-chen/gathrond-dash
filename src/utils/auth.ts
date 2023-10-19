import axios from './axios';
import { getCookie } from './helper/Helper';

const setAuthToken = () => {
  const token = getCookie('token');
  // console.log(token, 'the token');
  if (token) {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${JSON.parse(token)}`,
      redirect: 'follow',
    };
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
