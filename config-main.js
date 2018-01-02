const webpack = require('webpack'); //to access built-in plugins
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');

const config = {
  // entry: './src/main/main.js',
  entry: [
    // 'babel-polyfill',
    './src/main/main.js',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  plugins: [
    // Minify the output
    new UglifyJSPlugin(),
    // NODE_ENV should be production so that modules do not perform certain development checks
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
  target: 'electron-main',
  node: {
    __dirname: false,
    __filename: false,
  }
};

module.exports = config;