/**
 * loader 下载 使用
 * plugin 下载 引入 使用
 */


const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: path.resolve(__dirname, 'build')
    },
    //loader
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    // 执行顺序 从下到上 从右到左
                    //创建style标签，将js中的样式资源进行插入添加到head中生效 step 2
                    'style-loader',
                    //将css文件变成commonjs模块，里边内容是样式字符串 step 1
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    //将less文件编译城css文件 需下载less和less-loader
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        //默认会创建一个空的html页面并引入打包后生成的资源
        new HtmlWebpackPlugin({
            //复制这个文件并引入打包后资源
            template:'./src/index.html'
        })
    ],
    mode: 'development'
}