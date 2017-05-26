//浏览器对象
//js可以获取浏览器的对象，并进行操作。
//1.0 --window对象
//window对象不但充当全局作用域，而且表示浏览器窗口
'use strict';
console.log('window inner size:'+window.innerHeight+'x'+window.innerWidth);
console.log('window all size:'+window.outerWidth + 'x'+window.outerHeight);

//1.1 --navigator对象表示浏览器的信息，最常用的属性包括
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.language);
console.log(navigator.platform);
console.log(navigator.userAgent);

//1.2 --screen对象表示屏幕的信息，常用的属性有
console.log(screen.width);
console.log(screen.height);
console.log(screen.colorDepth);

//1.3 --location
//location对象表示当前页面的URL信息，例如，一个完整的URL：
//可以用location.href获取，要获得URL各个部分的值，可以写：
console.log(location.protocol);
console.log(location.host);
console.log(location.port);
console.log(location.pathname);
console.log(location.search);
console.log(location.hash);

//要加载一个新页面，可以调用
location.assign();
location.reload();

//-1.4 --document对象