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

//1.2--arguments指向当前函数的调用者传入的所有参数
//可以看出arguments是一个数组对象
function foo(x){
    console.log(x);  //此时只会输出第一个参数10
    for(var i = 0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}
foo(10,20,30);

//1.3--利用arguments可以获取函数的传入的参数，即使这个函数在定义时没有定义参数
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
//arguments最常用的用途是判断传入的参数个数

//1.4--rest参数
//由于js允许函数接收任意个数的参数，所以不得不用arguments接收参数
function foo(a, b) {
    var i = 0;
    var rest = [];
    if (arguments.length > 2) {
        for (i = 0; i < arguments.length; i++) {
            rest.push(arguments[i]);
        }
        console.log(rest);
    } else {
        console.log('a = ' + a);
        console.log('b = ' + b);
    }
}
foo(2, 3);  //a = 2, b = 3
foo(2, 3, 4);  //[2,3,4]
//上述如果传入的参数大于2个，就要用arguments，并且索引要从2开始判断
//1.5--ES6引入了rest参数，上面的函数可以改写成
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}
foo(1, 2, 3, 4);  //a = 1, b = 2,[3,4]
//传入的参数先绑定a,b，剩下的参数以数组的形式交给rest
//传入的参数如果少，则rest参数会接收一个空数组
//实例：用rest参数编写一个sum()函数，接收任意个数的参数并返回他们的和
function sum(...rest) {
    var x = 0
    for (var i = 0; i < rest.length; i++) {
        x = x + rest[i];
    }
    return x;
}
console.log(sum(1, 2, 3, 4));  //10
console.log(sum(0));  //0

//2.0 --变量作用域
//如果一个变量在函数体里定义，则变量的作用域在整个函数体里面，外部无法访问
function foo() {
    var x = 10;
    console.log(x);  //10
}
foo();  //调用函数
//console.log(x);  //报错

//如果两个函数共同申明了一个变量，则彼此独立,互不干扰
function foo1(){
    var x = 199;
    console.log(x);  //199
}
foo1();  //调用函数

//嵌套的函数，内部可以访问外部，反过来不行
function foo2(){
    var x = 2;
    function foo3(){
        var y = 4;
        x = x + y;
        console.log(x);
    }
    foo3();  //这个函数只能在这里调用
    console.log(x);
    //console.log(y);  //这里使用y变量会报错
}
foo2();
//foo3();  //此处调用foo3会报错，not defined

//如果内部和外部共同定义了一个相同的变量，则执行从内向外查找
function foo4(){
    var x = 9;
    function foo5(){
        x = 90;
        console.log(x);
    }
    //foo5();  //此处如果注释掉这个语句，则会直接跳过foo5()函数
    console.log(x);
}
foo4();  

//2.1--变量提升
function foo(){
    var x = 'hello ' + y;  //输出 'hello undefined'
    console.log(x);
    var y = 'js';
}
foo();
//js会自动将变量进行提升，所以var x = 'hello ' + y没有报错
//但是提升变量，但是不不会提升赋值，多以输出结果为'hello undefined'
//上述代码js引擎看成是如下：
function foo(){
    var y;
    var x = 'hello ' + y;
    console.log(x);
    y = 'js';
}

//2.2--全局作用域
//不在任何函数内定义的变量具有全局变量，js默认有有一个全局变量对象window，
//全局作用域的变量实际上默认是被绑定到window的一个属性
var course = 'Learn Javascript';
console.log(course);
console.log(window.course);
//结果是一样的，所以访问全局变量course和window.course是完全一样的。

//用变量定义的函数，也是一个全局的函数，可以通过window.访问
var foo = function(){
    var a = 0;
    var sum = 0;
    while(a<= 100){
        sum = sum + a;
        a = a + 2;
    }
    console.log(sum);  //2550
}
foo();
window.foo();
//js实际上只有一个全局作用域，如果没有在当前作用域中找到，就会继续往上查找，最后在全局作用域中没有找到，就会报错

//2.3--名字空间，
//全局变量都会绑定在window上，不同的js文件使用相同的函数或者变量命名，就会造成命名冲突。
//减少冲突的一个办法就是，把所有变量和函数都绑定在一个全局变量中
var MYAPP = {};
MYAPP.name = 'myapp';
MYAPP.version = 1.0;
//函数
MYAPP.foo = function(){
    return 'foo';
};

//2.4--局部作用域
//变量的作用域实际是在函数内部，所以没办法在函数的for循环中，定义局部作用域
function foo(){
    for(var i = 0; i< 5; i++){
        //
    }
    i += 100;        //循环结束后，i=5,此处可以引用i的值，最后i=105
    console.log(i);  //循环结束后，i=5,此处可以引用i的值，最后i=105
}
foo();  //105

//为了解决块级作用域，ES6引入了新的关键字let，用let代替var申明变量，可以申明一个块级作用域的变量。
function foo(){
    var sum = 0;
    for(let i = 0; i <= 100; i++){
        sum = sum + i;
    }
    // console.log(i);  //此处会报错，不能访问let定义的块级变量i
    console.log(sum);
}
foo();

//2.5 --const来定义常量,const和let都是块级作用域
const PI = 3.14;
// PI = 3;  //这里对常量赋值会报错
console.log(PI);


