const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js', //откуда начать
    output: { //выход
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist') //__dirname - корневая директория
    }
}