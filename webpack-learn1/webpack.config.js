var htmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
module.exports = {
    entry: {
        main: './src/js/app.js',
        a: './src/js/a.js',
        b: './src/js/b.js',
        c: './src/js/c.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[chunkhash].js' // 生成随机的js文件名
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'a.html', // 生成随机的html文件名
            template: 'index.html', // 以当前目录下的index.html文件为模板在指定文件夹下生成新的html文件
            inject: 'body', // 指明script文件引入是放在head标签内还是body标签内且生成后的html是自动添加script的
            title: 'this is a.html',
            chunks: ['main', 'a']
        }),
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'index.html',
            inject: 'body',
            title: 'this is b.html',
            chunks: ['b'], // 指明打包后该html引入的是哪个js入口文件对应的块
            excludeChunks: ['main', 'a', 'c'] //指明页面不包含的chunk
                // chunks与excludeChunks两个属性共同使用，方便设置一个页面中需要使用到多个chunk
        }),
        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'index.html',
            inject: 'body',
            title: 'this is c.html',
            chunks: ['c']
        })
    ]
}