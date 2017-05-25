'use strict';
var s = 'Hello';
function greet(name) {
    console.log(s + ',' + name + '!');
}
function sayHi(name){
    console.log(name +','+ 'I just say Hi!');
}
module.exports = {
    greet,
    sayHi
};