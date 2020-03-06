const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js', //откуда начать
        analytics: './src/analytics.js' // добавили вторую точку входа
    },
    output: { //выход
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist') //__dirname - корневая директория
    }
}