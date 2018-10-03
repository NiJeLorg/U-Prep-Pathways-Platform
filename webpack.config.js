module.exports = {
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env"]
                },
                exclude: /node_modules/
            }
        ]
    }
};
