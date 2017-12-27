const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // создание кастомных html файлов
const CopyWebpackPlugin = require('copy-webpack-plugin'); // копирование файлов
const CleanWebpackPlugin = require('clean-webpack-plugin'); // удаление файлов
const webpack = require('webpack'); // для HMR

const PATHS = {
  source: path.join(__dirname, 'src'), // основной путь к файлам
  build: path.join(__dirname, 'build') // пусть к билду
};

module.exports = {
  entry: [
    'react-hot-loader/patch', // HMR
    PATHS.source + '/index.jsx', // точка входа
  ],
  output: {
    path: PATHS.build, // точка выгрузки файлов
    filename: '[name].bundle.js' // создаем бандлы по имени
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // обработка jsx? файлов
        include: [path.resolve(__dirname, 'src')], // включаем файлы для обработки
        exclude: [path.resolve(__dirname, 'node_modules')], // исключаем файлы из обработки
        loaders: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './static/' // копируем папку static в папку build
      }
    ]),
    new HtmlWebpackPlugin({
      title: 'CustomTitle',
      template: require('html-webpack-template'), // плагин нужен для кастомного наполнения body
      bodyHtmlSnippet: '<div id="root"></div>' // наполняем дополнительно body
    }),
    new CleanWebpackPlugin(['build']), // удаляет папку build
    new webpack.NamedModulesPlugin(), // make it easier to see which dependencies are being patched
    new webpack.HotModuleReplacementPlugin() // HMR
  ],
  devServer: { // настройки для HMR
    contentBase: './build', // откуда брать данные для HMR
    hot: true, // включаем HMR

    noInfo: true, // убираю все консоль логи, кроме timings

    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }

    // inline: false,
    // colors: true,
    // progress: true, // отображает прогресс сборки бандла
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'], // автоматом подставляет данные расширения
  },
  devtool: 'cheap-module-eval-source-map', // сжатие?
};