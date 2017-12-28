const path = require('path');
const pathConf = require('./common.config');

module.exports = {
  jsx: {
    test: /\.jsx$/, // обработка jsx? файлов
    include: [path.resolve(pathConf.dirname, 'src')], // включаем файлы для обработки
    exclude: [path.resolve(pathConf.dirname, 'node_modules')], // исключаем файлы из обработки
    loaders: 'babel-loader'
  },
}