const config = require('../config')
const path = require('path')
const glob = require('glob')
exports.assetsPath = function (_path) {
  let assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.getEntries = function (globPath) {
  let entries = {}
  glob.sync(globPath).forEach(function (entry) {
    let tmp = entry.split('/').splice(-3)
    let moduleName = tmp.splice(1, 1)
    entries[moduleName] = entry
  })
  return entries
}