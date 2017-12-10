var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/root.jsx',
    plugins: [new ExtractTextPlugin('styles.css')],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            // Transform all ES6 to ES5
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },

            // Load CSS
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({use: 'css-loader', fallback: 'style-loader'})
            },

            // Load images
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'url-loader?limit=1000000000'
            }
        ]
    }
};

module.exports = config;
