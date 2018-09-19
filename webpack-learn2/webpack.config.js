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
            loader: 'babel-loader', // 指明匹配的文件使用什么loader进行预处理 起初就只写了babel 但新版的babel要求要写全 babel-loader
            exclude: path.resolve(__dirname, './node_modules'), // 指定打包不包括的文件夹
            include: path.resolve(__dirname, './src'), // 指定进行打包的文件夹
            query: {
                presets: ['env'] // 指定babel使本地js转化为指定版本的js 指定完之后需安装 npm install --save-dev babel-preset-env
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader' // 此处表示使用了两个loader 用'!'分隔 注意写的顺序 打包的时候是从右向左使用loader的
                // loaders: ['style-loader','css-loader','postcss-loader']  使用这种形式和上面的形式作用是一样的
        }]
    },
    // postcss: [
    //     require('autoprefixer')({ // 使用autoprefixer插件为css属性添加前缀
    //         browsers: ['last 5 versions'] // 插件中参数定义添加前缀为浏览器近期五个版本
    //     })
    // ],
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        }),
        require('autoprefixer')({ // 使用autoprefixer插件为css属性添加前缀
            browsers: ['last 5 versions'] // 插件中参数定义添加前缀为浏览器近期五个版本
        })
    ]
}