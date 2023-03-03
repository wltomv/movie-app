import axios from 'axios';
import queryString from 'query-string';

import apiConfig from './apiConfig';

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-type': 'application/json',
    },
    paramsSerializer: {
        serialize: (params) =>
            queryString.stringify({
                ...params,
                api_key: apiConfig.apiKey,
            }),
    },
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
    (response) => {
        return response && response.data ? response.data : response;
    },
    (error) => {
        throw error;
    }
);

export default axiosClient;
