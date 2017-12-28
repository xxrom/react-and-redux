module.exports = {
  dirname: __dirname + '/../../',

  resolve: {
    extensions: ['.jsx', '.js', '.json'], // автоматом подставляет данные расширения
  },

  devtool: 'cheap-module-eval-source-map', // сжатие?
};