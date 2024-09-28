const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  mode: 'development',
  entry: './views-test/index.js',
  devtool: false,
  bail: true,
  devServer: {
    port: 7002,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@views-library': path.resolve(__dirname, 'views-library'), // Add alias for the view folder
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
      template: path.resolve(__dirname, 'views-test', 'index.html')
    })
  ]
};

module.exports = config;
