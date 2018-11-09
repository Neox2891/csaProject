const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const server = {
    mode: 'development',
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
    entry: {
        index: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            './src/client/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
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
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};


module.exports = [server, client];