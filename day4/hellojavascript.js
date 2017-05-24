//1.0 --继续高阶函数---filter()函数
//filter()函数把传入的参数依次作用于每个元素，根据返回值是true还是false来决定是否保留元素

//1.1 --练习，在一个数组中只保留偶数，删除奇数
var arr = [1,2,3,4,5,6,7,8];
function foo5(x){
    return x%2 ===0;
}
console.log(arr.filter(foo5));  //[2, 4, 6, 8]

//1.2 --练习，把一个数组中的空字符串删掉
var arr = ['A','B','',undefined,false,null];
console.log(arr.filter(function(x){
    return x != '';
}));   //["A", "B", undefined, null]

//filter()接收的回调函数可以接收多个参数
//第一个参数表示Array的某个元素，第二个参数表示元素的位置（索引），第三个参数表示数组本身
var arr = ['A', 'B', 'C'];
console.log(arr.filter(function (element, index, array) {
    return console.log(index);
}));

//利用filter()函数可以巧妙的去除数组中重复的元素
var arr = ['apple', 'xiaomi', 'microsoft', 'IBM', 'apple', 'xiaomi'];
console.log(arr.filter(function(ele,index,self){
    if(self.indexOf(ele) != index){
        return false;
    }else{
        return true;
    }
}));
//indexOf()方法只返回第一次出现要查找的元素的索引

//利用filter()筛选出素数

//test
//just test值传递
function foo4(obj){
    obj.name = 'yang';
    obj = new Object();
    obj.name = 'rose';
}
var ob = new Object();
foo4(ob);
console.log(ob.name);  //yang

//2.0 =======================================================
//2.0 =======================================================
//2.1 --闭包
function sum(arr){
    return arr.reduce(function(x,y){
        return x + y;
    });
}
console.log(sum([1,4,7,11]));  //23

//此时如果不想立即返回求和的结果，而是想在以后根据需要求和
//可以返回这个求和函数
function foo3(arr){
    var sum = function(){
        return arr.reduce(function(x,y){
            return x + y;
        });
    }
    return sum;
}
console.log(foo3([1,3,5,7,9]));  //返回sum这个函数
console.log(foo3([1,3,5,7,9])());  //返回执行的结果
//在这个例子中，我们在foo3()函数中定义了sum函数，并且sum函数可以引用外部函数foo3()函数的局部变量和参数。
//在foo3()函数返回的函数sum中，保存了相关参数和变量，这种成为“闭包”
//注意一点：调用函数foo3()时，每次返回的函数sum()都是一个新的函数，即使传入的是相同的参数

//2.2 --继续闭包
/*function createFunctions() {
    var arr = new Array();
    for (var i = 0; i < 5; i++) {
        arr[i] = function () {
            return i;
        };
    }
    return arr;
}
var result = createFunctions();
//执行creatFuctions()函数，返回的arr数组里面的元素都是匿名函数，匿名函数里面保存了变量i
var f1 = result[0];
var f2 = result[1];
var f3 = result[2];
//执行函数f1其实指代的是arr数组中的第一个元素匿名函数，后面加()执行函数，
//就会去找保存的内部局部变量i，此时循环已经结束，i的值为5
console.log(f1())    //5
console.log(f2());    //5
console.log(f3());    //5*/

//如果想正常返回，就要对函数进行改写
function createFunctions() {
    var arr = new Array();
    for (var i = 0; i <= 5; i++) {
        arr[i] = (function (n) {
            return i;
        })(i);    //传入参数i并且立即执行存入arr
    }
    return arr;
}
var result = createFunctions();
var f1 = result[0];
var f2 = result[1];
var f3 = result[2];

console.log(f1);   //0
console.log(f2);   //1
console.log(f3);   //2

//借助闭包实现块级作用域
function creat_count(init) {
    var x = 0 || init;
    return {
        count: function () {
            return x = x + 1;
        }
    }
}
var foo = creat_count(1);
console.log(foo.count());  //2
console.log(foo.count());  //3
console.log(foo.count());  //4

var foo1 = creat_count(10);
console.log(foo1.count());  //11
console.log(foo1.count());  //12
console.log(foo1.count());  //13

//函数creat_count()接收一个参数，并且返回一个对象，这个对象引用了外部外部变量x
//所以当调用creat_count()函数时，传入参数1，执行函数后，返回对象的匿名函数保存着这个变量x的值。
//下次调用时，依然会在这个基础上加1