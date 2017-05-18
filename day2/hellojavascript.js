//函数的学习
//1.1--函数的定义和调用
//方法一
function abss(x) {
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
console.log(abs1('A'));  //抛出异常


