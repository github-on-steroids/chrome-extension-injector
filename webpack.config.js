'use strict'
const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    // options: './src/options',
    background: './src/background.ts',
    content: './src/content.ts',
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {},
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: '*',
        context: 'src',
        ignore: '*.ts',
      },
    ]),
  ],
  output: {
    path: path.join(__dirname, 'extension'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
