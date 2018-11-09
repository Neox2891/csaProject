const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const server = {
    entry: './src/server/server.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js',
        publicPath: '/'
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: 'babel-loader',
        }]
    }
};

const client = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js'
      },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [ 
                    'style-loader', 
                {
                    loader: 'css-loader',
                    options: { modules: true }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};


module.exports = [server, client];