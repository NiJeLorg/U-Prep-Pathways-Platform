module.exports = {
    output: {
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                presets: ['env']
            },
            exclude: /node_modules/
        }]
    }
};
