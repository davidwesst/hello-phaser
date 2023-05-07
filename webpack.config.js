const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const isProduction = process.env.NODE_ENV === "production";
const config = {
    mode: (isProduction) ? "production" : "development",
    entry: {
        index: "./src/index.ts"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "game.bundle.js",
        clean: true
    },
    devServer: {
        static: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.ts?$/i,
                exclude: /(node_modules)/,
                loader: "ts-loader"
            },
            {
                test: /\.html$/i,
                loader: "html-loader"
            }
        ],
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html",
            inject: true
        })
    ]
}
module.exports = config;
