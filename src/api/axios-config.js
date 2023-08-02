import axios from 'axios';
import isBrowser from 'utils/isBrowser';
// import messages from '@/messages';

import _ from 'lodash';
import { getToken, removeToken } from 'utils/token';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080',
});

export const setAuthHeader = (token) => {
  if (token) {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

if (isBrowser()) {
  setAuthHeader(getToken());
}

const onSuccess = function (response) {
  console.debug('Request Successful!', response);
  const isLoginRequest = response.config.url.endsWith('/login'); // Assuming the login endpoint ends with '/login'.
  return isLoginRequest ? response : response.data;
};

const onError = function (error) {
  console.log(error);
  console.error('Request Failed:', error.config);
  if (error.response) {
    // Request was made but server responded with something
    // other than 2xx
    console.error('Status:', error.response.status);
    console.error('Data:', error.response.data);
    console.error('Headers:', error.response.headers);
    if (
      (error.response.status === 401 &&
        error.response?.data?.msg === 'Session Expired!') ||
      error.response?.data?.msg === 'Login Required!'
    ) {
      removeToken();
      isBrowser() && (window.location.href = '/login');
    }
  } else {
    // Something else happened while setting up the request
    // triggered the error
    console.error('Error Message:', error.message);
  }

  return Promise.reject({
    msg: !error?.response
      ? 'Network Issue!'
      : error?.response?.data?.msg || //not 200
        _.values(error?.response?.data?.error)[0] || //validation error
        error?.response?.data?.message, //controller throw error
    validations: error?.response?.data?.error
      ? error?.response?.data?.error
      : null,
    status: error?.response?.status || 'not status',
  });
};

client.interceptors.request.use((config) => {
  const token = getToken();
  if (
    !config?.headers?.common?.Authorization ||
    config?.headers?.common?.Authorization?.search('null') !== -1 ||
    token
  ) {
    config.headers['Authorization'] = token;
  }
  return config;
});

client.interceptors.response.use(onSuccess, onError);
export default client;
