import axios from 'axios';

import { getCookie } from './helper/Helper';

const API = 'https://staging.gathrone.us';

/** base url to make request to the BE end point */

const instance = axios.create({
  baseURL: API,
});

instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    // console.log(error, 'ereru');

    return error.response;
  },
);

export default instance;
