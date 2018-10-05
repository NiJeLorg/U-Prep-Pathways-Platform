const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");
const env = process.env.NODE_ENV || "development";
if (env === "development") {
    require("dotenv").load();
}
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
    entry: "./app/js/app.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "public"),
        publicPath: "/public/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./app/index.pug",
            inject: false
        })
    ],
    devServer: {
        hot: true,
        publicPath: "/public/",
        historyApiFallback: true
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
                use: ["style-loader", "css-loader", "sass-loader"]
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

module.exports = new Promise((resolve, reject) => {
    readFile("./app/views").then(() => {
        resolve(config);
    });
});
