# 说明

基于 vue-cli3.0 的一套 vue.js 开发最佳实践，旨在为新手开发者提供一个可参考，可快速入门的 `vue` 项目开发实例，方便迅速用于生产环境，减少学习成本。

该项目暂无任何业务逻辑，后期会陆续更新一下具体组件开发，vuex 数据规范交互等 demo

如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^\_^

或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

# 声明

```bash
#一般我们正式开发项目，会区别多个代码环境，直接打包上线必然会出现难以挽回的bug，而且生产环境和开发环境接口，数据都是不同的，介于此我们一般划分3个环境。
development # 开发
prerelease  # 预发布（一般会配置一个和正式环境一模一样的线上测试）
production  # 生产环境
```

# 文件结构说明

<pre>
.
├── README.md                   // 说明
├── dist                        // 项目build目录（即预发布文件）
├── publish                     // 项目publish目录（正式线上环境文件）
├── tests                       // 单元测试
├── public                      // 静态资源目录
│   ├── favicon.ico             // 浏览器图标文件
│   └── index.html              // 项目入口模板文件
├── package.json                // 项目配置文件
├── src                         // 生产目录
│   ├── assets                  // css js 和图片资源
│   ├── api                     // 接口服务
│   ├── components              // 各种组件
│   ├── views                   // 各种页面
│   ├── utils                   // 业务需要的工具函数，自行扩展
│   ├── style                   // 全局样式和scss使用的mixin文件
│   ├── i18n                    // 国际化配置目录
│   ├── store                   // vuex配置目录
│   │   ├── index.js            // 配置入口
│   │   ├── state.js            // 状态维护文件即Vuex的所有数据源对照组件中data方法理解
│   │   ├── actions.js          // 方法维护文件对照组件中methods理解
│   │   ├── getters.js          // state派生状态对照组件中computed理解
│   │   ├── mutaitions.js       // 状态修改提交方法，该方法是同步方法
│   │   └── mutaition-types.js  // 提交修改抽离常量文件
│   ├── router.js               // 路由配置
│   └── App.vue                 // 根组件
│   └── main.js                 // Webpack 预编译入口
├── .browserslistrc             // 浏览器兼容配置
├── .env.development            // 本地开发环境需要的配置 （接口地址写这里面也可以）
├── .env.prerelease             // 预发布环境需要的配置 （接口地址写这里面也可以）
├── .env.production             // 正式环境需要的配置 （接口地址写这里面也可以）
├── .eslintrc.js                // eslint配置
├── .gitignore                  // git仓库需要忽略的文件配置
├── .babel.config.js            // babel 配置
├── package.json                // 项目管理配置文档说明
├── vue.config.js               // vue-cli构建项目详细配置文件代替老版build文件夹
.
</pre>

## 开发步骤 （以下开发步骤可以全部使用 `npm` 本项目暂用 `yarn`）

> yarn 和 npm 类似同属于包管理工具具体用法大致相同，需要了解 yarn 请移步：
> https://yarn.bootcss.com/

```bash
# 克隆到本地
git clone git@github.com:webweifeng/vue-base-tpl.git

# 进入文件夹
cd vue-base-tpl

# 安装项目依赖文件
npm install 或 yarn(推荐)

# 启动本地开发
yarn run serve

# 打包预发布环境项目
yarn run build

# 打包生产环境项目
yarn run publish

#  运行测试
yarn run test

# 代码修复 最后终端运行npm run serve就不会报ESLint错误了
yarn run lint

# 单元测试
yarn run test:unit
```

### 自定义 `vue.config` 文件参数

See [Configuration Reference](https://cli.vuejs.org/config/).
