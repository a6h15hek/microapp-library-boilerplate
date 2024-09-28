const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const config = {
  mode: 'development',
  entry: './views-lib/index.js',
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'views-library', 'build'),
    filename: 'bundle.js',
    library: 'microapp-common', // Name of your library
    libraryTarget: 'umd', // Universal Module Definition to support various module systems
  },
  devServer: {
    port: 7001,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@views': path.resolve(__dirname, 'views-library'), // Add alias for the view folder
    },
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'views-library/public', 'index.html')
    }),
    new Dotenv({ path: './resources/.env' }),
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      exclude: 'node_modules',
      failOnError: true
    }),
  ]
};

module.exports = config;
