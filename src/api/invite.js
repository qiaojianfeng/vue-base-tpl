import { getServer } from './config/base.js';
import { BASE_URL } from './config/config.js';

// 生成不同的业务接口服务实例
const inviteServer = getServer(BASE_URL.inviteBase);

/**
 * example
 * 这里导出对应业务的接口地址
 * 建议所有接口都统一添加前缀或者后缀 api方便业务中一眼看到就知道是HTTP服务接口
 */
export const getInviteInfoApi = id => {
  return inviteServer.get('invite/info', {
    id
  });
};
