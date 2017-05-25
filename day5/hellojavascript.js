//3.0 =====================================================
//=======箭头函数===========================================
//ES6新增了一个Arrow Function的箭头函数
// x => x * x;
//上面的代码相当于
/*function (x) {
    return x * x;
}*/
//箭头函数相当于匿名函数，并且简化了函数定义。箭头函数又两种格式，一种像上面的，只包含一个表达式，连{...}和return都省略掉了。
//还有一种包含多条语句，这时不可以省略。如下：
/*x => {
    if (x > 0) {
        return x * x;
    }
    else {
        return -x * x;
    }
}*/

//如果参数不是一个，就要把参数用括号包起来
/*(x, y) => x * x + y * y;*/
//无参数
/*() => 3.14*/
//可变参数
/*(x, y, ...rest) => {
    var i, sum = x + y;
    for (i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}*/
//要返回一个对象
//x => { foo: x }这么写会有语法冲突

//要改为
// x => ({foo : x})

//3.1 --箭头函数的此法作用域
//箭头函数和匿名函数又明显的区别，箭头函数的内部是词法作用域，由上下文确定。

//前面例子已经讲过，这个函数无法得到想要的结果
/*var obj = {
    birth: 1990,
    getAge: function(){
        var b = this.birth;    //此时this指向obj，所以this.birth等于1990
        var fn = function(){
            return new Date().getFullYear() - this.birth;  //在函数的内部函数再次调用this，此时this指向window或者undefined
        };
        return fn();
    }
};
console.log(obj.getAge());   //NaN*/
//箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj
var obj = {
    birth : 1990,
    getAge: function(){
        var b = this.birth;
        var fn = () => new Date().getFullYear() -this.birth;
        return fn();
    }
};
console.log(obj.getAge());  //27

//