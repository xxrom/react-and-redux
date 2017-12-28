const path = require('path');
const pathConf = require('./common.config');

const PATHS = {
  build: path.join(pathConf.dirname, 'build') // пусть к билду
};

module.exports = {
  hot: {
    path: PATHS.build, // точка выгрузки файлов
    filename: '[name].bundle.js' // создаем бандлы по имени
  },
  build: {

  }
};