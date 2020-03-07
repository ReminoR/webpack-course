const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'), //с файлами в какой папке работаем
    mode: 'development',
    entry: {
        main: './index.js', //откуда начать
        analytics: './analytics.js' // добавили вторую точку входа
    },
    output: { //выход
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist') //__dirname - корневая директория
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ]
}