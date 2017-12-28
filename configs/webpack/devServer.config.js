module.exports = { // настройки для HMR
    contentBase: './build', // откуда брать данные для HMR
    hot: true, // включаем HMR

    noInfo: true, // убираю все консоль логи, кроме timings

    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  };