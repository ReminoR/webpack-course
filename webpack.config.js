const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
console.log('IsDev ==', isDev)

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}


module.exports = {
    context: path.resolve(__dirname, 'src'), //с файлами в какой папке работаем
    mode: 'development',
    entry: {
        main: './index.js', //откуда начать
        analytics: './analytics.js' // добавили вторую точку входа
    },
    output: { //выход
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist') //__dirname - корневая директория
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/assets/favicon.png'),
                to: path.resolve(__dirname, 'dist')
            }
        ]),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: isDev, //hot module replacement - изменение сущностей без перезагрузки страницы. Необходимо только для режима разработки
                        reloadAll: true
                    },
                },
                'css-loader'
            ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: isDev, //hot module replacement - изменение сущностей без перезагрузки страницы. Необходимо только для режима разработки
                        reloadAll: true
                    },
                },
                'css-loader',
                'less-loader'
            ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev
    }
}