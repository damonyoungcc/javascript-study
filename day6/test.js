'use strict';
//process.nextTick()将在下一轮事件循环中调用
process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');

//执行上述代码node test.js，输出的是：
//nextTick was set!
//nextTick callback!
//说明传入的process.nextTick()函数不是立刻执行，而是等到下一次事件循环

//node.js进程本身的事件就是由process对象来处理，如果我们响应exit事件，就可以在程序即将退出时执行某个回调函数
process.on('exit', function (code) {
    console.log('about to exit with code:' + code);
});

//判断node环境执行
if(typeof(window) === 'undefined'){
    console.log('node.js');
}else{
    console.log('browser');
}