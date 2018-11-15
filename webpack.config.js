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
    resolve: {
        extensions: ['.js', '.jsx', '.png']
    },
    mode: 'development',
    entry: {
        index: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            './src/client/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: './',
        // chunkFilename: '[name].bundle.js',
        hotUpdateChunkFilename: ".hot/[id].[hash].hot-update.js",
        hotUpdateMainFilename: ".hot/[hash].hot-update.json"
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
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[name].[ext]',
                        context: ''
                      }
                    }
                  ]
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};


module.exports = [client, server];