# 国际化配置服务

[学习地址](https://kazupon.github.io/vue-i18n/).

根目录 index.js 是一个实例代码，你可以创建不同名称的文件用于对不同页面国际化维护

🔥 注意：

- 新建文件必须规范必须是以下示例

```js
export default {
  en: {},
  cn: {}
};
```

- 必须在 i18n.js 文件中注册对应文件否则不生效

```js
let i18n = new VueI18n({
  // ...
  messages: {
    en: {
      index: index.en
    },
    cn: {
      index: index.cn
    }
  }
});
```

# 使用

```js
// index是你文件名称，后面是你文件中具体key的名称
// js中使用
this.$t('index.about');
// 模板中使用
<div>{{$t('index.about')}}<div>
```

更详细复杂的使用方式这里就不多介绍，感兴趣自己去学习吧
