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
            loader: 'style-loader!css-loader?importLoaders=1!postcss-loader' // 此处表示使用了两个loader 用'!'分隔 注意写的顺序 打包的时候是从右向左使用loader的
                // loaders: ['style-loader','css-loader','postcss-loader']  使用这种形式和上面的形式作用是一样的
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!postcss-loader!less-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!postcss-loader!sass-loader'
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.tpl$/,
            loader: 'ejs-loader'
        }, {
            test: /\.(png|jpg|gif|svg)$/i,
            loader: 'file-loader',
            query: {
                // 设置打包后的文件名：目录下文件名-哈希5位.后缀名
                name: 'assets/[name]-[hash:5].[ext]'
            }
        }, {
            test: /\.(png|jpg|gif|svg)$/i,
            loaders: [
                'url-loader?limit=1000&name=assets/[name]-[hash:5].[ext]', // 一些参数的设置可以采用查询字符串的形式进行设置
                'image-webpack-loader'
            ]
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