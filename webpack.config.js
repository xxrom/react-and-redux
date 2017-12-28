const entry = require('./configs/webpack/entry.config');
const output = require('./configs/webpack/output.config');
const rules = require('./configs/webpack/rules.config');
const plugins = require('./configs/webpack/plugins.config');
const devServer = require('./configs/webpack/devServer.config');
const common = require('./configs/webpack/common.config');

module.exports = {
  entry: entry.hot,
  output: output.hot,
  module: {
    rules: [
      rules.jsx // лоадер для jsx
    ]
  },
  plugins: [
    plugins.CopyWebpackPlugin, // копирование
    plugins.HtmlWebpackPlugin, // создаем index.html
    plugins.CleanWebpackPlugin, // удаляет папку build
    plugins.HMR.NamedModulesPlugin, // подключаем HMR
    plugins.HMR.HotModuleReplacementPlugin, // подключаем HMR
  ],
  devServer: devServer, // настройки для локального HMR
  resolve: common.resolve, // автоматом подставляет данные расширения
  devtool: common.devtool, // отображение кода
};