const HTMLWebpackPlugin = require('html-webpack-plugin')
const MinifyPlugin = require("babel-minify-webpack-plugin");
const webpack = require('webpack')
const path = require('path')

const PUBLIC_DIR = 'public'

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, PUBLIC_DIR),
    hot: true,
    port: 3340
  },
  entry: path.resolve(__dirname, 'src', 'main.js'),
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/preset-env'
          ]
        },
        test: /\.js$/
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'cookies.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, PUBLIC_DIR, 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MinifyPlugin({}, {
      exclude: /node_modules/,
      comments: false
    })
  ],
  target: 'web'
}
