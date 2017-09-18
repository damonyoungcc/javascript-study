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
/*var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth;
        var fn = () => new Date().getFullYear() - this.birth;
        return fn();
    }
};
console.log(obj.getAge());  //27*/

//generator生成器是ES6引入的新的数据类型，一个generator看上去像是一个函数，但是可以返回多次
//先来看一段generator的定义
/*function* foo() {
    yield x + 1;
    yield x + 2;
    return x + 3;
}*/
//generator和函数不一样，generator由function*定义（多出一个*号）
//除了可以用return返回，还可以用yield返回多次

//3.2 --generator函数的额实例：编写一个菲波那切数列
/*function fib(max){
    var t,
    a = 0,
    b = 1,
    arr = [0,1];
    while(arr.length < max){
        t = a + b;
        a = b;
        b = t;
        arr.push(t);
    }
    return arr;
}
//测试：
console.log(fib(10));
console.log(fib(20));*/

//3.3 --现在用generator改写
/*function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 1;
    while (n < max) {
        yield a;
        t = a + b;
        a = b;
        b = t;
        n++;
    }
    return a;
}
for(var x of fib(100)){
    console.log(x);
}*/
//如果是这么调用：fib(5);不行，因为直接调用会返回一个gererator对象
//也就是说fib(5)仅仅是创建了一个generator对象，还没有去执行
//generator还有一个好处，就是把异步回调代码变成同步代码，Ajax会用到。

//3.4 --练习：编写一个自增的ID
/*var current_id = 0;
//由于函数无法保存状态，所以需要用到闭包，并且在函数内改写变量current_id
function next_id(){
    current_id ++;
    return current_id;
}
//用generator函数改写
function* add_id(){

    var current_id = 0;
    current_id++;
}*/

//js中也有包装对象，number和boolean和string
//虽然包装对象看上去和原来的值一模一样，显示出来也一模一样，但是类型已经变成Object了，
//所以包装对象和原始值用===比较会返回false
//正则

//4.0 --JSON是Javascript Object Notation的缩写，它是一种数据交换格式
//在JSON中，一共有这几种数据类型：
//1. number:和Javascript的number完全一致
//2. boolean:就是Javascript的true和false
//3. string就是Javascript的string
//4. null就是Javascript的null
//5. array：就是Javascript的Array表示方式--[]
//6. object：就是Javascript的{...}表示方式

//在Javascript中可以直接用JSON，因为Javascript内置了JSON的解析

//可以把任何一个Javascript对象变成JSON，就是把这个对象序列化成一个JSON格式的字符串，这样可以通过网络传给传递给其他计算机
//如果我们收到一个JSON格式的字符串，只需要把它反序列化为一个Javascript对象，就可以在Javascript中直接使用这个对象了

//4.1 --先将小明这个对象序列化成JSON字符串
/*var Xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.75,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['Java', 'Python', 'Javascript']
};
console.log(JSON.stringify(Xiaoming));*/
//序列化后为：{"name":"小明","age":14,"gender":true,"height":1.75,"grade":null,"middle-school":"\"W3C\" Middle School","skills":["Java","Python","Javascript"]}

//还可以加上参数输出的更好看
// console.log(JSON.stringify(Xiaoming, null, '  '));
//结果为：
/*{
  "name": "小明",
  "age": 14,
  "gender": true,
  "height": 1.75,
  "grade": null,
  "middle-school": "\"W3C\" Middle School",
  "skills": [
    "Java",
    "Python",
    "Javascript"
  ]
}*/

//第二个参数用于控制如何筛选对象的键值，如果我们只想输出指定的属性，可以传入Array
// console.log(JSON.stringify(Xiaoming, ['name', 'skills'], '  '));
//结果是：
/*{
  "name": "小明",
  "skills": [
    "Java",
    "Python",
    "Javascript"
  ]
}*/

//还可以传入一个函数，这样对象的每个键值对都会先被函数处理
/*function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}*/
//convert这个函数传入的时候只需要传入函数名字即可
// console.log(JSON.stringify(Xiaoming, convert, '  '));
//输出如下：
/*hellojavascript.js:198 {
  "name": "小明",
  "age": 14,
  "gender": true,
  "height": 1.75,
  "grade": null,
  "middle-school": "\"W3C\" MIDDLE SCHOOL",
  "skills": [
    "JAVA",
    "PYTHON",
    "JAVASCRIPT"
  ]
}*/

//要想精确的控制如何序列化小明，可以给Xiaoming加一个toJSON方法
/*var Xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.75,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['Javascript', 'Java', 'Python'],
    toJSON: function () {
        return {
            'Name': this.name,
            'Age': this.age
        };
    }
};
console.log(JSON.stringify(Xiaoming));*/
//{"Name":"小明","Age":14}

//4.2 --反序列化
//拿到一个JSON格式的字符串，我们直接用JSON.parse()把他变成一个Javascript对象
console.log(JSON.parse('[1,2,3]'));   //[1,2,3]
console.log(JSON.parse('{"name":"小明","age":26}'));  // {name: "小明", age: 26}
console.log(JSON.parse('true'));  //true
console.log(JSON.parse('123.45'));  //123.45

//JSON.parse()可以接收一个函数，用来转换解析出的属性
console.log(JSON.parse('{"name":"小明","age":29}',function(key,value){
    if(key === 'name'){
        return value = value + '同学';
    }
    if(key === 'age'){
        return value = value * 2;
    }
    return value;   
}));
//输出：{name: "小明同学", age: 58}