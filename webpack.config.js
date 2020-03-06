const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js', //откуда начать
        analytics: './src/analytics.js' // добавили вторую точку входа
    },
    output: { //выход
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist') //__dirname - корневая директория
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
}