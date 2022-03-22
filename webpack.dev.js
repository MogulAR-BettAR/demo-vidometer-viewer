const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const mode = 'development';
const autoprefixer = require('autoprefixer');
const BASE_PATH = JSON.stringify('/');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'public'),
  },
  mode,
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: path.resolve(__dirname, './public/index.html')
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/assets", to: "./assets" },
      ]
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: [
      path.join(__dirname, 'public'),
    ],
    compress: true,
    port: 8080,
    inline: true
  },
};
