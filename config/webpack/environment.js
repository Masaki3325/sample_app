const { environment } = require('@rails/webpacker');
const webpack = require('webpack');

// ProvidePluginの設定
environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default']
}));

// resolve.fallbackの設定
const customConfig = {
  resolve: {
    fallback: {
      dgram: false,
      fs: false,
      net: false,
      tls: false,
      child_process: false
    }
  }
};

// nodeオプションを削除
environment.config.delete('node');

// customConfigをマージ
environment.config.merge(customConfig);

module.exports = environment;
