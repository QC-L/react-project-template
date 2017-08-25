const path = require('path')
module.exports = {
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'), // 打包编译输出路径
    assetsPublicPath: '',  // 公共文件目录
    assetsSubDirectory: 'static' // 静态资源目录
  },
  dev: {
    env: require('./dev.env'),
    port: 3000,
    autoOpenBrowser: true,
    assetsPublicPath: '/', // 公共文件目录
    assetsSubDirectory: 'static', // 静态资源目录
    proxyTable: {}
  }
}
