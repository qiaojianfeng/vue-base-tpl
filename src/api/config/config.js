// 服务端接口地址

const APIS = {
  development: {
    inviteBase: '//console.bcloud.com/api/v1/'
  },
  prerelease: {
    inviteBase: '//test.console.bcloud.tw/api/v1/'
  },
  production: {
    inviteBase: '//account.bcloud.one/api/v1/'
  }
};

export const BASE_URL = APIS[process.env.NODE_ENV];
export const HEADERS = { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' };
