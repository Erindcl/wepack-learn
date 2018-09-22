## wepack学习实践二 各种Loader的使用


``` bash

babel-loader 转换ES6等代码

处理项目中的CSS 
# 使用css-loader和style-loader 打包css样式并动态的添加到html-head-style标签中
# 使用postcss-loader 为兼容性不好的CSS样式打包时自动添加前缀处理
# css文件中利用@import ‘路径’引入了其他文件的css块
# 使用less-loader处理less文件
# 使用sass-loader处理scss文件

处理项目中的资源文件
# 使用html-loader处理webpack中的HTML模板
# 使用ejs-loader处理webpack中的tpl模板 
# 使用file-loader和url-loader进行图片文件的打包
# 使用image-webpack-loader将图片进行压缩之后再进行url或file-loader的处理

持续增加中...

```


实践过程记录见我的博客： [传送门](https://blog.csdn.net/m0_37747665/article/details/82744013).
