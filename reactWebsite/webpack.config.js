var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/root.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: BUILD_DIR + '/'
    },
  module : {
    loaders : [
        // Transform all ES6 to ES5
        {
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel-loader',
            query:
                {
                    presets:['es2015','react']
                }
        },

        // Load images
        {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'url-loader?limit=1000'
        }

        // {
        //     test: /\.(jpg|png|svg)$/,
        //     loader: 'file-loader'
        // }

        // File loader
        // {
        //     test: /\.(png|jpg|gif)$/,
        //     use: [
        //         {
        //             loader: 'file-loader?name=/public/icons/[name].[ext]"}',
        //             options: {}
        //         }
        //     ]
        // }
    ]
  }
};

module.exports = config;
