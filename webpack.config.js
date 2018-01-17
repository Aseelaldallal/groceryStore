const webpack = require('webpack');
const resolve = require('path').resolve;
const src = resolve(__dirname, 'src');
const dist = resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    // entry point to our application
    app: './src/index.js'
  },

  output: {
    // when everything gets transpiled and compiled it gets bundled to dist/bundle.js
    path: dist,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      // rules that we use in order to transpile all of our code into compatible browser code
      {
        test: /\.js$/, // reg expression. Looks for all .js files
        loader: 'babel-loader', // pre-processor that we're running.
        include: [src], // look only in source folder
        exclude: /node_modules/,
        query: {
          presets: ['stage-0'] // stage-0 = code that works in our browser
        }
      }
    ]
  },

  plugins: [new HtmlWebpackPlugin()]
};
