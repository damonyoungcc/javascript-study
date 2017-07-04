//在js中所有的代码都是单线程执行，所以js的所有的网络操作，浏览器时间，都必须是异步执行，异步执行可以用回调函数实现
/*function callback(){
    console.log('Done');
}
console.log('before setTimeout()');
setTimeout(callback,1000);
console.log('after setTimeout()');*/

//一个Promise的例子：生成一个0-2之间的随机数，如果小于1，则等待一段时间后返回成功，否则返回失败
/*function test(resolve,reject){
    var timeOut = Math.random() * 2;
    console.log('set timeout to:'+ timeOut +'seconds.');
    setTimeout(function(){
        if(timeOut < 1){
            console.log('call resolve()...');
            resolve('200 OK');
        }
        else{
            console.log('call reject()...');
            reject('timeout in '+timeOut + 'seconds.');
        }
    },timeOut * 1000);
}*/
/*var p1 = new Promise(test);  //变量p1是一个Promise对象，它负责执行test函数，由于test函数在内部是异步执行，当test函数执行成功时，我们
var p2 = p1.then(function(result){    //当test执行成功时，告诉Promise执行这个函数
    console.log('成功'+result);
});
var p3 = p2.catch(function(reason){    //当test执行失败时，我们告诉Promise对象执行
    console.log('失败'+reason);
});*/

//Promise对象可以串联起来，我们告诉Promise对象
/*new Promise(test).then(function(result){
    console.log('成功： '+result);
}).catch(function(reason){
    console.log('失败： '+reason);
});*/

function timeout(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    });
}
async function asyncPrint(value,ms){
    await timeout(ms);
    console.log(value);
}
asyncPrint('hello world',1000);  //每个1000毫秒输出一个hello world
