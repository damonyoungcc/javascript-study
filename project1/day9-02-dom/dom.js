     var arr = document.getElementsByClassName('c-red c-green');
    console.log(arr[0]);
    var arr = document.getElementsByClassName('c-red c-green')[0].getElementsByTagName('p');
    document.getElementById('test-p');

    document.getElementsByClassName('c-green')[1].lastChild

    var pId = document.getElementById('p-id');
    pId.innerHTML = '这是一个P标签';

//节点操作
//获取节点 getElementById 
//getElementsByTagName 返回值会值是动态的
 //getElementsByClassName 
 //querySelector/All
 var users = document.querySelector('#users')     //一旦获取就不会变，不是动态改变的
