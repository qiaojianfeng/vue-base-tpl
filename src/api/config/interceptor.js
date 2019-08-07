// import { BASE_URL } from './config';

export const requestInterceptor = function(config) {
//   请求正确拦截
  return config;
};

export const requestInterceptorError = function(error) {
//   请求错误拦截
  return Promise.reject(error);
};

export const responseInterceptor = function(response) {
//   响应正确拦截
  // const data = response.data || { code: undefined };
  // const code = data.code;
  // const pageURL = window.location.href;

  return response;
};
export const responseInterceptorError = function(error) {
//   响应错误拦截
  return Promise.reject(error);
};
