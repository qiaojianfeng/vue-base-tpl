import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { getParameter } from '@/utils/utils';
import index from './index';

const defaultLanguage = 'cn';
const supports = ['cn', 'en'];
Vue.use(VueI18n);
Vue.prototype.$changeLanguage = function(lang) {
  if (inList(lang)) {
    i18n.locale = lang;
  } else {
    console.log('APP do not support language:' + lang);
  }
};
function inList(lang) {
  let sign = false;
  supports.forEach(ele => {
    if (ele === lang) {
      sign = true;
    }
  });
  return sign;
}

function getLanguage() {
  let lang = defaultLanguage;
  let browserLanguage = (navigator.browserLanguage || navigator.language).toLowerCase();
  let queryLanguage = getParameter('lang');
  let systemLanguage = queryLanguage || browserLanguage;
  let short = systemLanguage.match(/^(\w+)(-|$)/)[1];
  short = short === 'zh' ? 'cn' : short;
  if (short && inList(short)) {
    lang = short;
  } else {
    console.log('APP do not support language:' + short);
  }
  return lang;
}

let i18n = new VueI18n({
  locale: getLanguage(),
  fallbackLang: defaultLanguage,
  messages: {
    en: {
      index: index.en
    },
    cn: {
      index: index.cn
    }
  }
});

export default i18n;
