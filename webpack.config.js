const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'client') + '/index.js',
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }

            }
        ]
    },
    mode : 'development',
    watchOptions: {
        ignored: '/node_modules/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'client'),
        historyApiFallback: true,
        disableHostCheck: true
    }
}