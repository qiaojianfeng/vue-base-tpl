# API 配置说明

HTTP 服务选择 `axiso`

ajax 服务配置一般要求

- 接口灵活可配置
- 请求过程中允许做拦截策略
- 可以生成不同服务实例

# 文件说明

```bash
base.js
# 接口基础逻辑 导出getServer方法可以根据不同地址生成不同服务
```

```bash
config.js
# 接口地址配置 公共请求header设置，接口地址前面提到也可以直接写在根目录 .env.xxx文件中，方便我们对接服务端提供不同环境接口配置
```

```bash
interceptor.js
# 拦截逻辑配置 做一下统一状态码拦截，比如：code===106 即未登录统一调整登录页，或者请求响应loading状态控制
```

api 根目录文件 `invite.js`是一个例子，你可以叫其他名字，这里放置所有业务涉及到的接口，按照你的具体逻辑拆分不同的接口文件维护
比如：所有账户信息都放置在 `account.js`,所有登录信息都放置在 `login.js`等等类似自己去细分

# 组件中调用接口模式

```js
// 按需引入不同的服务接口
import { getInviteInfoApi } from '@/api/invite';
export default {
  methods: {
    async getInviteInfo() {
      try {
        let res = await getInviteInfoApi();
        if (res.code === 0) {
          // TODO 业务逻辑
        } else {
          // 可以做所有异常alert提示
          alert(res.msg);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getInviteInfo();
  }
};
```
