const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    //loadPage: './src/loadPage.js',
    //home: './src/home.js'
    //menu: './src/menu.js',
    //contact: './src/contact.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    },
  watch: true,
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    host: '0.0.0.0', // in this section, enter IP address of remote dev server
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Battleship Page',
      content: 'class="content"',
      template: './src/template_index.html',
      filename: './index.html',
      favicon: './src/assets/battleship.ico'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};