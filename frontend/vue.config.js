const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  lintOnSave: true,
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.( js|css )$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  }
}
