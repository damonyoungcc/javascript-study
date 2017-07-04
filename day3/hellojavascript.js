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
console.log(getAge());  //NaN*/
//通过对象调用，可以正常输出，通过对象调用，这个this指向的是这个对象Person
//通过getAge()函数调用，结果是NaN，因为通过函数getAge()调用时，this指向全局的变量，也就是window
/*var fn = Person.age;
console.log(fn());  //此时也是显示NaN*/
//因此要保证this指向正确，必须通过Object.XXX()进行调用

//在'use strict'模式下，让函数的this指向undefined，这是运行就会报错

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
Person.age();  //报错：Uncaught TypeError: Cannot read property 'birth' of undefined*/
//原因是this只在Person对象的age方法的函数内指向Person，但是在函数内部定义的函数中的this又指向了undefined
//在非严格模式下则指向window。

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
console.log(Math.max.call(null, 3,6,8));   //8*/


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
));  //55*/

//把数组[1,2,3,4,5,7]变成123457
/*var arr1 = [1, 2, 3, 4, 5, 7];
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
/*var arr = ['adam','LISA','barT'];
function trans(x){  //'adam'
    return x.toUpperCase()[0]+ x.toLowerCase().substring(1);
}
console.log(arr.map(trans));*/

//2.6 --利用map()把字符串变成整数 ['1','2','3']变成[1,2,3]
/*var arr = ['1','2','3'];
var r;
r = arr.map(function(x){
    return parseInt(x);
});
// r = arr.map(parseInt);
console.log('[' + r[0]+','+r[1]+','+r[2]+']');*/

//3.0 --总结，字符串的操作
//3.1 --转义字符
// console.log('I\'m OK!');
//3.2 --多行字符串
/*console.log(`这是
多行
字符串`);
//3.3 --模板字符串
var name = 'yang';
var age = 18;
console.log(`你好，${name},你今年${age}岁了`);*/

//==============操作字符串==========================
//3.4 --获取字符串的长度
/*var str = 'hello javascript';
console.log(str.length);    //16
//获取指定索引的字符串
console.log(str[4]);  //o*/
//=========重要：字符串是不可变的
//3.5 --字符串是不可变的，对字符串的某个索引赋值，不会报错但是也没有任何效果
/*var str = 'hello';
str[1] = 'h';
console.log(str);  //hello*/

//3.6 --toUpperCase()
/*var str = 'hello javascript';
console.log(str.toUpperCase());  //HELLO JAVASCRIPT*/
//3.7 --toLowerCase()
/*var str = 'Hello World';
console.log(str.toLowerCase());  //hello world
console.log(str);    //原字符串不改变：Hello World*/
//3.8 --indexOf()
/*var str = 'Hello World';
console.log(str.indexOf('llo'));  //2*/
//3.9 --substring()返回指定区间的字符串
/*var str1 = 'hello,world';
console.log(str1.substring(1,4));  //ell
console.log(str1);
console.log(str1.substring(3));    //lo,world*/
//3.10 --split()方法
/*var str = '12345';
console.log(str.split(''));  //["1", "2", "3", "4", "5"]*/

//移除字符串中的空格
//var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";
//console.log(names);
//var re = /\s*;\s*/;
//console.log(names.split(re));  
//["Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand "]
//4.0============数组===================
/*var arr = [1,2,'hello',false];
console.log(arr.length);    //4
arr.length = 5;
console.log(arr);    //[1, 2, "hello", false, undefined]  改变了数组
arr.length = 2;
console.log(arr);    //[1, 2]  改变了数组
arr[0] = 'hello';
console.log(arr);    //["hello", 2] 改变了数组*/

//4.1 --indexOf()
/*var arr = [1,2,'hello','world'];
console.log(arr.indexOf('hello'));   //2
console.log(arr);  //一个简单的查找是不会改变数组
console.log(arr.indexOf(3));  //不存在返回-1
console.log(arr);  //此时数组还是没有被改变的。*/

//4.2 --slice();
/*var arr = [1,2,3,'hello','javascript'];
console.log(arr.slice(1,2));  //从索引1开始截取到索引2，左包右不包，返回截取的数组[2]
console.log(arr);  //arr没有发生改变
console.log(arr.slice(1));    //[2, 3, "hello", "javascript"]
console.log(arr.slice());  //不传参数就完全输出 [1, 2, 3, "hello", "javascript"]*/

//4.3 --push()和pop()
/*var arr = [1,2,3,'hello','world'];
console.log(arr.push('hello'));  //在末尾添加元素，返回push后的数组的长度
console.log(arr);    //改变了数组 [1, 2, 3, "hello", "world", "hello"]
console.log(arr.pop());  //删除末尾的一个元素  返回删除的元素hello
console.log(arr);    //改变了数组[1, 2, 3, "hello", "world"]
console.log(arr.pop(2,3));  //传入参数没有意义，依然删除最后一个元素并且返回world*/

//4.4 ---shift()和unshift()方法
//shift()往数组的头部删除一个元素
//unshift()往数组的头部添加一个元素
/*var arr = [1,2,3,'hello',false];
console.log(arr.shift());  //1返回从头部删除的元素
console.log(arr.shift(3));
console.log(arr);  //[2, 3, "hello", false]
console.log(arr.unshift('hello'));  //4返回添加这个元素后的数组的长度
console.log(arr);  //改变了数组["hello", 3, "hello", false]*/

//4.5 --sort()方法，对数组进行排序，后面高阶函数可以看到，可以用sort()方法，对数组进行指定的排序

//4.6 --reverse()把对数组的元素掉个个
/*var arr = [1,2,3,4];
console.log(arr.reverse());  //返回掉个个之后的数组 [4,3,2,1]
console.log(arr);       //原数组改变  [4,3,2,1]*/

//4.7 --splice()数组的万能方法
//从指定的索引开始删除若干元素，再从该位置添加若干元素
/*var arr = [1,2,3,4,5,6,7,8];
console.log(arr.splice(1,2,3));  //返回[2,3]，从索引1开始，删除两个元素，添加一个元素3  
console.log(arr);  //数组[1, 3, 4, 5, 6, 7, 8]  
var arr1 = [1,2,3,4,5,6,7,8];
console.log(arr1.splice(1,0,3));  //返回删除的元素，从索引1开始，删除0个元素，添加一个元素3
//=======注意，添加的元素是在开始索引的前面添加
console.log(arr1);   //[1, 3, 2, 3, 4, 5, 6, 7, 8]
//只删除不添加
console.log(arr1.splice(2,2)); //从索引2开始，删除两个元素，返回删除的数组 [3,2]
console.log(arr1);    //[1,3,4,5,6,7,8]*/

//4.8 --concat()方法，拼接数组
/*var arr = [1,2];
var arr1 = ['hello','world'];
console.log(arr.concat(arr1));  //拼接后返回一个新的数组[1, 2, "hello", "world"]
console.log(arr);      //[1,2]
console.log(arr1);    //['hello','world']*/

//4.9 --join()
/*var arr = [1,2,3,4,5,6];
console.log(arr.join('-'));  //返回一个字符串'1-2-3-4-5-6'
console.log(arr);    //原数组不变，还是[1,2,3,4,5,6]
console.log(arr.join());  //'1,2,3,4,5,6'  join中不传入参数，则默认返回每个元素间加逗号的字符串
console.log(arr.join().length);  //11
console.log(arr.join()[1]);  //输出,号
console.log(arr.join(''));  //如果传入的参数是空字符串，则返回字符串'123456'
console.log(arr.join(','));  //'1,2,3,4,5,6'
console.log(arr.splice(0,3));  //*/

//5.0 --高阶函数ß
/*function add(x, y, f) {
    return f(x) + f(y);
}
console.log(add(-5, 6, Math.abs));  //11*/

//5.1 --高阶的map()方法
//map()方法定义在数组中，这样可以通过数组调用map()方法
/*var arr = [1, 2, 3, 4];
function pow(x) {
    return x * x;
}
console.log(arr.map(pow));  //[1,4,9,16]*/

//把arr中所有的数字转化成字符串
/*var arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.map(String));  //["1", "2", "3", "4", "5", "6"]*/

//5.2 --reduce()方法
//reduce()方法把一个函数作用在数组上，这个函数接收两个参数，接收两个参数，reduce()把计算的结果继续与下一个元素做累积计算
/*var arr2 = [1, 3, 5, 7, 9];
//求和
console.log(arr2.reduce(function (x, y) {
    return x + y;
}));  //25
//求积
console.log(arr2.reduce(function (x, y) {
    return x * y;
}));   //945*/

//把数组[1,3,5,7,9]转成13579
/*var arr3 = [1,3,5,7,9];
console.log(arr3.reduce(function(x,y){
    return x*10 + y;
}));   //13579*/

//把字符串'123456'转换成数字123456
/*var str = '123456';
var arr = str.split('');  //['1','2']
var arr1 = arr.map(Number);
console.log(arr1.reduce(function(x,y){
    return x*10 + y;
}));    //123456*/

//练习用户输入不规范['adam', 'LISA', 'barT']，转换成['Adam', 'Lisa', 'Bart']
/*var arr1 = ['adam', 'LISA', 'barT'];
var arr2 = arr1.map(function(x){
    return x.toUpperCase();
});
var arr3 = arr2.map(function(x){
    return x.substring(0,1) + x.substring(1).toLowerCase();
});
console.log(arr3);  //["Adam", "Lisa", "Bart"]*/

//把字符串数组['1','2','3']转换成[1,2,3]
// var arr = ['1','2','3'];
/*var arr1 = arr.map(function(x){
    return Number(x);
});
console.log(arr1);    //[1, 2, 3]*/

//也可以这么写，但是会有问题
/*var arr2 = arr.map(function(x){
    return parseInt(x);
});
console.log(arr2);    //[1, 2, 3]
console.log(arr.map(parseInt));  //此时输出[1, NaN, NaN]*/
//与parseInt()接收的参数有关