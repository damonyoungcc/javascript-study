//属性访问器进行属性操作
setTimeout( fn =>{
    var input = document.getElementById('userName');
    input.className = 'u-txt';
    input.value = 'ydyxxxxx111@163.com';
    console.log('111');
},2000);
/* setTimeout( hide =>{
    var input = document.getElementById('userName');
    input.disabled = true;
    console.log('222');
},4000)  */

//get / setAttribute(attributeName);
setTimeout( fn =>{    
    var input = document.getElementById('userName');
    console.log(input.getAttribute("class"));
    input.setAttribute("class","userName");
    //input.setAttribute("value","xxx1111@163.com")  用setAttribute设置value不生效
    input.value = 'hello'
    console.log('aaa');
},6000)

setTimeout( fn1 =>{
    var input = document.getElementById('userName');
    input.setAttribute("disabled",'');
    console.log('bbb');
},8000)

