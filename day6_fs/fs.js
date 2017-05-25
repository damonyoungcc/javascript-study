//node.js内置的fs模块就是文件系统模块，负责读写文件
//fs模块同时提供了异步和同步的方法
//js是单线程模型，执行IO操作时，js代码无需等待，而是传入回调函数后，继续执行后续js代码。例如JQuery提供的getJSON()操作
/*$.getJSON('http://example.com/ajax',function(data){
    console.log('IO结果返回后执行...');
});
console.log('不等待IO结果直接执行后续代码...');

//而同步IO操作需要等待函数返回：
var data = getJSONSync('http://example.com/ajax');
//同步操作的代码简单，但是缺点是程序等待IO操作，在等待时间内，无法响应其他任何事件。
*/


//异步读取一个文件的代码
'use strict';
var fs = require('fs');
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

//异步读取时，传入的回调函数接收两个参数，当正常读取时，err参数为null，data参数为读取到String。
//当读取发生错误时，err参数代表一个错误对象，data为undefined。这也是node.js标准回调函数：第一个参数代表错误信息
//第二个参数代表结果。

//下面的例子演示读取一个二进制图片文件
'use strict';
var fs = require('fs');
fs.readFile('sample.jpg',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        console.log(data.length + 'bytes');
    }
});
//执行后输出下面这样
//<Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 48 00 48 00 00 ff e1 00 8c 45 78 69 66 00 00 4d 4d 00 2a 00 00 00 08 00 05 01 12 00 03 00 00 00
//  01 00 01 ... >
// 44738bytes

//当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象，在node.js中，Buffer对象就是一个包含零个或任意个字节的数组
//Buffer对象可以和String做转换，例如，把一个Buffer对象转换成String：
var text = data.toString('utf-8');
console.log(text);

//或者把一个String转换成Buffer
var buf = new Buffer(text,'utf-8');
console.log(buf);
