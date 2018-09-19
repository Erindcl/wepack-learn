module.exports = {
    plugins: [
        require('autoprefixer')({ // 使用autoprefixer插件为css属性添加前缀
            browsers: ['last 5 versions'] // 插件中参数定义添加前缀为浏览器近期五个版本
        })
    ]
}