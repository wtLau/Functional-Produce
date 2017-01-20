const path = require('path');
const webpack = require('webpack');

console.log('----------------------------------------------------')
console.log('------------- Building with WebPack ----------------')
console.log('----------------------------------------------------')
console.log();

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: { await: "./await.js", callbacks: "./callbacks.js", promises: "./promises.js" },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};

