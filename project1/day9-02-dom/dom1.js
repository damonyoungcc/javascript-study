//getElementById
//getElementsByClassName
//getElementsByTagName
//querySelector/querySelectorAll
//creatElement
//innerText
//appendChild
//insertBefore
//removeChild
//innerHTML

//增加一个学员列表

//创建一个li节点   Element = document.createElement(tagName)
//var ElementLi = document.createElement("li");
/* var ElementImg = document.createElement("img");
var ElementA = document.createElement("a"); */
//设置li节点的class属性

//插入li节点  element.appendChild(achild);
/* var users = document.getElementById('users');
var ElementP = document.createElement("p");
ElementP.innerText = '还有人学习吗？'
users.appendChild(ElementP); */


//创建img节点
//设置img节点的src属性
//插入img节点
//创建a节点
//设置a节点的href属性

//设置a节点的内容  
//1.获取指定某个节点及其指定后代元素的内容：element.textContent
//2.修改内容  element.textContent = 'example'   兼容方案用element.innerText

//插入a节点  

setTimeout(addUser =>{
    var users = document.getElementById('users');
    var ElementUl = users.querySelector('ul');
    var ElementLiFirst = document.getElementsByClassName('user')[0];

    var ElementLi = document.createElement("li");
    var ElementImg = document.createElement("img");
    var ElementA = document.createElement('a');
    ElementLi.className = 'user'
    ElementImg.src = '4.jpg';
    ElementA.href = '/user/4';
    ElementA.innerText = '哈哈哈4'
    ElementLi.appendChild(ElementImg);
    ElementLi.appendChild(ElementA);
    //ElementUl.appendChild(ElementLi);
    //在某个节点之前插入一个节点
    ElementUl.insertBefore(ElementLi,ElementLiFirst)
}, 2000);

setTimeout(removeUser =>{
    var users = document.getElementById('users');
    var ElementUl = users.querySelector('ul');
    var li = document.getElementsByClassName('user')[0];
    ElementUl.removeChild(li)
}, 4000);

//innerHTML
setTimeout(addHTML =>{
    var ht =`<img src="1.jpg">
            <a href="/user/1">哈哈哈哈5</a>`;

    var li = document.createElement('li');
    li.className = 'user';
    var ElementUl = users.querySelector('ul');
    ElementUl.appendChild(li);
    li.innerHTML = ht;
},6000)



//在某个元素前面插入一个节点