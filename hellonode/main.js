'use strict';
//引入hello模块
var hello = require('./hellonode');
var sh = 'Michael';
hello.greet(sh);
hello.sayHi(sh);




/*//要在模块中输出变量，用：
module.exports = variable;

//要引入其他模块输出的对象，用
var foo = require('other_module');*/