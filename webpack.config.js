module.exports = {
  entry: './es/src/app.js',
  output: {
    filename: './compiled/app.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
    ]
  }
}