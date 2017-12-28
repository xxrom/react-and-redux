const CopyWebpackPlugin = require('copy-webpack-plugin'); // копирование файлов
const HtmlWebpackPlugin = require('html-webpack-plugin'); // создание кастомных html файлов
const CleanWebpackPlugin = require('clean-webpack-plugin'); // удаление файлов

const webpack = require('webpack'); // для HMR

module.exports = {
  CopyWebpackPlugin: new CopyWebpackPlugin([
    {
      from: './static/' // копируем папку static в папку build
    }
  ]),

  HtmlWebpackPlugin: new HtmlWebpackPlugin({
      title: 'CustomTitle',
      template: require('html-webpack-template'), // плагин нужен для кастомного наполнения body
      bodyHtmlSnippet: '<div id="root"></div>' // наполняем дополнительно body
    }),

  CleanWebpackPlugin: new CleanWebpackPlugin([
    'build' // удаляет папку build
  ]),

  HMR: {
    NamedModulesPlugin: new webpack.NamedModulesPlugin(), // make it easier to see which dependencies are being patched
    HotModuleReplacementPlugin: new webpack.HotModuleReplacementPlugin() // HMR
  }

};