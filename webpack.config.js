const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  entry: './src/components/index.jsx',
  output: {
    filename: 'bundle.js',
    path: './dist',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /(\.js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: `style-loader!css-loader?${cssModules}`
      }
    ]
  },

  devServer: {
    port: 3000,
    stats: { colors: true },
    inline: true
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/assets/index.html' }),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
}
