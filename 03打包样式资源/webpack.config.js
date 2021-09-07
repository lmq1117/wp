/**
 * 
 * 
 * 
 * 
 */
const {
    resolve
} = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
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

    ],
    mode: 'development'
}