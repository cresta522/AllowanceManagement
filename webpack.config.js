const path = require('path');
const nodeExternals = require('webpack-node-externals');
const glob = require('glob');
const entries = glob.sync('./src/*.ts');

module.exports = {
  mode: 'production',
  //mode: 'development',
  entry: entries,
  output: {
    filename: 'server.js',
    path: path.join(__dirname, './dist'),
    publicPath: '/',
  },
  
  devtool: 'source-map',
  
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 5000,
    disableHostCheck: true,
    inline: false,
    filename: 'server.js',
  },
  
  module:{
    rules:[
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  
  externals: [
    nodeExternals()
  ]
};