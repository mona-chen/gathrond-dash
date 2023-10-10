import axios from 'axios';

import { getCookie } from './helper/Helper';

const API = "env.base_url";

/** base url to make request to the BE end point */

const instance = axios.create({
	baseURL: API,
});

instance.interceptors.request.use(
	async (config) => {
		const _reToken = getCookie('g-rec-response');
		if (_reToken) {
			config.headers['g-rec-response'] = _reToken;
		}
		try {

		} catch (error) {
			// logger.log(error);
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	async (response) => {

		return response;
	},
	async (error) => {
		let val;


		return val;
	}
);

export default instance;
