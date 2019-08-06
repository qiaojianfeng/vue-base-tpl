// import { BASE_URL } from './config';

export const requestInterceptor = function(config) {
  return config;
};

export const requestInterceptorError = function(error) {
  return Promise.reject(error);
};

export const responseInterceptor = function(response) {
  // const data = response.data || { code: undefined };
  // const code = data.code;
  // const pageURL = window.location.href;

  return response;
};
export const responseInterceptorError = function(error) {
  return Promise.reject(error);
};
