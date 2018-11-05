const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

const devMode = process.env.NODE_ENV !== "production";

// read app/shared and views
const createHTMLPlugin = (filename, template) => {
    return new HtmlWebpackPlugin({
        filename,
        template,
        inject: false
    });
};

const config = {
    context: __dirname,
    entry: ["./app/js/app.js"],
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "public")
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: "./app/index.pug"
        })
    ],
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        proxy: {
            "/api": "http://localhost:3000"
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.pug$/,
                use: ["html-loader?attrs=false", "pug-html-loader"]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader?url=false",
                    "sass-loader"
                ]
            }
        ]
    }
};

const readFile = folder =>
    new Promise((resolve, reject) => {
        fs.readdir(folder, (err, files) => {
            if (err) {
                return console.log("err", err);
            }
            files.forEach((file, i) => {
                const fileName = file.split(".")[0];
                config.plugins.push(
                    createHTMLPlugin(
                        `./views/${fileName}.html`,
                        `${folder}/${file}`
                    )
                );
                if (i == files.length - 1) resolve(true);
            });
        });
    });

// module.exports = config;

module.exports = new Promise((resolve, reject) => {
    readFile("./app/views").then(() => {
        resolve(config);
    });
});
