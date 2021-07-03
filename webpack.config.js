const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
    entry: './src/index',
    mode: 'development',
    devServer: {
        port: 8082,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
    },
    output: {
        publicPath: 'auto',
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "example2",
            filename: "remoteEntry.js",
            exposes: {
                "./App": "./src/components/App",
                "./AppCompat": "./src/components/AppCompat"
            },
            // disabled sharing here to test compat mode
            // shared: { react: { singleton: true }, "react-dom": { singleton: true } },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
}