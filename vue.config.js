const BASE_URL = process.env.BASE_URL;
const OUT_DIR = process.env.VUE_APP_OUT_DIR;
const ASSETS_DIR = process.env.VUE_APP_ASSETS_DIR;
const INDEX_PATH = process.env.VUE_APP_INDEX_PATH;

module.exports = {
  publicPath: BASE_URL,
  outputDir: OUT_DIR,
  assetsDir: ASSETS_DIR,
  indexPath: INDEX_PATH,
  devServer: {},
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [],
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  productionSourceMap: false,
  css: {
    modules: true,
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        data: '@import "~@/style/index.scss";'
      }
    }
  }
  // 配置快捷路径
  // chainWebpack: config => {
  //   config.resolve.alias.set('@', '');
  // }
};
