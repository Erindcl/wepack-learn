const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const publicPath = '/'

module.exports = {
	entry: [
		'react-hot-loader/patch',
		path.resolve(__dirname, './src/index.js')
	],
	output: {
		path: path.resolve(__dirname, 'build'), //打包文件的输出路径
		filename: '[name].[hash].js', //打包文件名
		publicPath: publicPath,
	},
	//配置webpack-dev-server热更新
	devServer: {
		publicPath: publicPath,
		contentBase: path.resolve(__dirname, 'build'),
		inline: true,
		hot: true,	
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'react'], //babel编译es6以上语法以及jsx语法
					plugins: ["react-hot-loader/babel"]
				}
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'eslint-loader',
			},

			{
                test: /\.(css|less)$/,
    			use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                        	plugins: () => [
                        		require('autoprefixer'), //自动添加浏览器前缀
                        		require('postcss-flexbugs-fixes') //解决flex布局的一些bug
                        	]
                        }
                        
                    },
                    {
                    	loader: 'less-loader',
                    }
                ]
            },
			{
				test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
				loader: 'url-loader',
				options: {
				  limit: 10000, //该大小以下图片会转成base64
				},
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		}),
	],
	
}








