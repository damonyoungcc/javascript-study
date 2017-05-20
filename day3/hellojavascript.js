//1.1 --第三天开始js函数方法，闭包，函数式编程的学习
//1.1 --函数的方法
/*var Person = {
    name : 'yang',
    birth : 1989,
    age: function(){
        var y = new Date().getFullYear();
        return y - this.birth;  //使用this调用
    }
};
//调用有些不同
console.log(Person.age);  //这个是调用对象的属性age
console.log(Person.age());  //这个是调用对象的属性并且执行函数*/

//1.2 --this的用法
/*function getAge(){
    var y = new Date().getFullYear();
    return y - this.birth;
}
var Person = {
    age : getAge,
    name : 'yang',
    birth : 1989
};
console.log(Person.age());  //28
console.log(getAge());  //NaN
//通过对象调用，可以正常输出，通过对象调用，这个this指向的是这个对象Person
//通过getAge()函数调用，结果是NaN，因为通过函数getAge()调用时，this指向全局的变量，也就是window
var fn = Person.age;
console.log(fn());  //此时也是显示NaN
//因此要保证this指向正确，必须通过Object.XXX()进行调用

//在'use strict'模式下，让函数的this指向undefined，这是运行就会报错*/

//1.3 --继续this
/*'use strict'
var Person = {
    name: 'yang',
    birth: 1989,
    age: function () {
        function getAge() {
            var f = new Date().getFullYear();
            return f - this.birth;
        }
        return getAge();
    }
};
Person.age();  //报错：Uncaught TypeError: Cannot read property 'birth' of undefined
//原因是this只在Person对象的age方法的函数内指向Person，但是在函数内部定义的函数中的this又指向了undefined
//在非严格模式下则指向window。*/

//1.4 --this修复，可以用一个that变量先捕获this存储起来
/*var Person = {
    name: 'yang',
    birth: 1989,
    age: function () {
        var that = this.birth;
        function getAge() {
            var f = new Date().getFullYear();
            return f - that;
        }
        return getAge();
    }
}
console.log(Person.age());  //28*/

//1.5 --apply()指定this的指向
//要指定函数的this指向，可以用函数本身的apply()方法，接收两个参数，第一个是需要绑定this的变量，第二个是Array数组，表示函数本身的参数
//改写getAge()函数
/*var Person = {
    name: 'yang',
    birth: 1989,
    age: getAge
};
function getAge() {
    var f = new Date().getFullYear();
    return f - this.birth;
}
console.log(Person.age());
console.log(getAge.apply(Person, []));  //this指向Person，参数为空*/

//1.6 --call()函数
//call()方法与apply()方法类似，知识call()方法的参数是依次传入，而apply()方法是打包成数组传入
//对于普通函数调用，通常把this绑定为null
/*console.log(Math.max.apply(null,[3,4,5]));  //5 
console.log(Math.max.call(null, 3,6,8));   //8
*/

//1.7 --装饰器
/*var count = 0;
var oldParseInt = parseInt;  //只要把parseInt赋值给oldParseInt，就是把函数的名称赋值给oldParseInt，保存下来函数
window.parseInt = function(){
    count += 1;
    var a = oldParseInt.apply(null,arguments);
    return a;
}
parseInt(10);
parseInt(11);
parseInt(14);
console.log(count);  //3
console.log(oldParseInt);  //function parseInt() { [native code] }*/



//====================================================================
//2.0 --高阶函数
//js中函数的参数能接受变量，也能接受函数，这种函数就叫做高阶函数
/*function add(x, y, f) {
    return f(x) + f(y);
}
console.log(add(3, -4, Math.abs));  //7*/
//上面就是把f当做一个函数传入
//函数执行的过程是这样的：
/*var x = 3;
var y = -4;
f = Math.abs;
f(x) + f(y) ==> Math.abs(x) + Math.abs(y);
return 7;*/

//2.1 --map()方法定义在数组Array上，调用Array的map方法，并且传入自己的函数，就可以得到一个新的Array
/*var arr = [1, 1, 2, 3, 5, 8, 9, 12, 14];
function pow(x) {
    return x * x;
}
console.log(arr.map(pow));  //[1, 1, 4, 9, 25, 64, 81, 144, 196]*/
//map里只要传入要调用函数的名字就可以了。即函数对象本身

//也可以写一个循环实现上述功能
/*var arr = [1, 1, 2, 3, 5, 8, 9, 12, 14];
var arr1 = [];
function pow(){
    for(var i = 0; i < arr.length; i++){
        var result = arr[i] * arr [i];
        arr1.push(result);
    }
}
pow();
console.log(arr1);  //[1, 1, 4, 9, 25, 64, 81, 144, 196]*/
//高阶函数就是把运算规则抽象化了。

//2.2 --利用map()函数把数组的元素转化成字符串
/*var arr = [1, 1, 2, 3, 5, 8, 13];
console.log(arr.map(String));  //["1", "1", "2", "3", "5", "8", "13"]*/
//map()方法是无论怎么对数组操作都会返回一个数组。

//2.3 --reduce的用法
//Array的reduce()方法把一个函数作用在数组的各个元素上，这个函数必须接受两个参数，reduce把结果继续与数组的下一个传入参数进行累积计算
//求数组各个元素的乘积
/*var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function foo(x, y) {
    return x * y;
}
console.log(arr.reduce(foo));  //3628800
console.log(arr.reduce(
    function foo1(x, y) {
        return x + y;
    }
));  //55

//把数组[1,2,3,4,5,7]变成123457
var arr1 = [1, 2, 3, 4, 5, 7];
console.log(arr1.reduce(function (x, y) {
    return x * 10 + y;
}));     //123457*/

//2.4 --reduce的练习， 把一个数字字符串，转化为数字，不用内置的parseInt()函数
//把字符串'12345'先变成[1,2,3,4,5],转换成'1-2-3-4-5',然后转换成数字12345
/*var str = '12345';
var arr2 = str.split('');  //["1", "2", "3", "4", "5"]
function num(x){
   return Number(x);
}
console.log(arr2.map(num));  //[1,2,3,4,5]
console.log(arr2);  //["1", "2", "3", "4", "5"]
console.log(arr2.join('-'));  //'1-2-3-4-5'
console.log(arr2.map(num).reduce(function(x,y){
        return x*10 + y;
    }
));  //12345*/

//2.5 --用户输入不规范，输入['adam','LISA','barT'],经转换输出['Adam','Lisa','Bart']
var arr = ['adam','LISA','barT'];
function trans(x){  //'adam'
    return x.toUpperCase()[0]+ x.toLowerCase().substring(1);
}
console.log(arr.map(trans));

//2.6 --利用map()把字符串变成整数 ['1','2','3']变成[1,2,3]
var arr = ['1','2','3'];
var r;
r = arr.map(function(x){
    return parseInt(x);
});
// r = arr.map(parseInt);
console.log('[' + r[0]+','+r[1]+','+r[2]+']');
