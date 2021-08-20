const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const loader = require('sass-loader');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

// console.log('IS PROD', isProd);
// console.log('IS DEV', isDev);

const filename = ext => isDev ? `bundle.${ext}` : `bundle.[fullhash].${ext}`;
const jsLoaders = () => {
    const loaders = [
        {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }
    ]

    if (isDev) {
        loaders.push('eslint-loader')
    }

    return loaders;
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core'),
        }
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
        port: 3000,
        hot: isDev
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html' //имя файла в src (context)
        }),
        new CopyPlugin({
            patterns: [
                { 
                    from: path.resolve(__dirname, 'src/favicon.ico'), 
                    to: path.resolve(__dirname, 'dist') 
                }
            ],
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: jsLoaders() 
            }
        ],
    }
}