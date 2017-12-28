const path = require('path');
const pathConf = require('./common.config');

const PATHS = {
  source: path.join(pathConf.dirname, 'src'), // основной путь к файлам
};

module.exports = {
  hot: [
    'react-hot-loader/patch', // HMR
    PATHS.source + '/index.jsx', // точка входа
  ],
  build: [

  ]
};