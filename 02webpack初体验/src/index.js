/**
 * 1.运行指令
 *      开发环境    webpack ./src/index.js -o ./build/built.js --mode=development
 *          webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
 * 
 *      生产环境    webpack ./src/index.js -o ./build/built.js --mode=production
 * 
 * 
 * 
 *      不能打包css、img等其他资源
 *      import './css/index.css';
 * 
 *      结论
 *          webpack能打包js json资源，不能打包 css img等其他资源
 *          生产环境和开发环境将ES6模块化打包为浏览器能识别的模块化
 *          生产环境比开发环境多一个js压缩
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

import data from './data/data.json';

console.log(data);








function add(x, y) {
    return x + y;
}
console.log(add(1, 2))