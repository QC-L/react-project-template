const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const path = require('path')

const config = require('../config')
const utils = require('./utils')
const baseWebpackConfig = require('./webpack.base.config')

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
})

var pages = utils.getEntries('./src/**/*.html')
for (var page in pages) {
  var conf = {
    filename: page + '.html',
    template: pages[page], //模板路径
    inject: true,
    excludeChunks: Object.keys(pages).filter(item => {
      return (item != page)
    })
  }
  module.exports.plugins.push(new HtmlWebpackPlugin(conf))
}

