const config = require('../config')
const path = require('path')

exports.assetsPath = function (_path) {
  let assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}
