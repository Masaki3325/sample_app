const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

// ProvidePluginの設定
environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default']
}))

// nodeオプションの設定を追加
environment.config.merge({
  node: {
    __dirname: false,    // 必要に応じて設定
    __filename: false,   // 必要に応じて設定
    global: true,        // 必要に応じて設定
    // 以下のプロパティはWebpack 5ではサポートされていないため削除または無効化
    // fs: 'empty',        // 削除または無効化
    // net: 'empty',       // 削除または無効化
    // tls: 'empty',       // 削除または無効化
    // dgram: 'empty',     // 削除または無効化
    // child_process: 'empty' // 削除または無効化
  }
});

module.exports = environment;
