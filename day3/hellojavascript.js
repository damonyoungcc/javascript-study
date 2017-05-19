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