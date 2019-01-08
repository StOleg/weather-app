const path = require('path');
const webpack = require('webpack');
const config = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/dist/',
        watchContentBase: false,
        overlay: true
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /(\.css)$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        config.mode = 'development';
        config.plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        );
        config.devServer.hot = true;
    }

    if (argv.mode === 'production') {
        config.mode = 'production';
    }

    return config;

};