//函数的学习
//1.1--函数的定义和调用
//方法一
/*function abss(x) {
    if (x > 0) {
        return x;
    } else {
        return -x;
    }
}
console.log(abss(-9));  //9
//方法二
var absss = function (x) {
    if (x > 0) {
        return x;
    } else {
        return -x;
    }
};
console.log(absss(-12));  //12

//调用函数传入的参数可以是任意个数的,对传入的参数进行检查
function abs1(x) {
    if (typeof (x) != 'number') {
        throw 'Not a number';
    }
    if (x > 0) {
        return x;
    } else {
        return -x;
    }
}
console.log(abs1('A'));  //抛出异常*/

//1.2--arguments指向当前函数的调用者传入的所有参数
//可以看出arguments是一个数组对象
/*function foo(x){
    console.log(x);  //此时只会输出第一个参数10
    for(var i = 0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}
foo(10,20,30);*/

//利用arguments可以获取函数的传入的参数，即使这个函数在定义时没有定义参数
function test(){
    if(arguments.length ===0){
        return 0;
    }
    var x = arguments[0];
    return x;
}
console.log(test());  //0
console.log(test(10));  //10
console.log(test(10,20));  //10
