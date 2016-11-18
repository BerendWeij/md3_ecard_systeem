var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './index.js',
     output: {
         path: path.resolve(__dirname, 'lib'),
         publicPath: "/lib/",
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
