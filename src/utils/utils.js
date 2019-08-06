export const getParameter = function(key) {
  var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  var context = '';
  if (r) {
    context = r[2];
  }
  reg = null;
  r = null;
  return context || '';
};

export const getCookie = function(key) {
  let arr;
  let reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
  if ((arr = document.cookie.match(reg))) return window.decodeURI(arr[2]);
  else return null;
};

export const isLogin = function() {
  return false;
};
