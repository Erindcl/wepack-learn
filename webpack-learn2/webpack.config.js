var htmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/, // 匹配.js后缀的文件
            loader: 'babel-loader', // 指明匹配的文件使用什么loader进行预处理
            exclude: path.resolve(__dirname, './node_modules'), // 指定打包不包括的文件夹
            include: path.resolve(__dirname, './src'), // 指定进行打包的文件夹
            query: {
                presets: ['env'] // 指定babel使本地js转化为指定版本的js 指定完之后需安装 npm i --save-dev babel-preset-latest
            }
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ]
}