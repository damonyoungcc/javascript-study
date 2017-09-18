// //1.0--多行字符串
// console.log(`这是一个
// 多行字符串`);


// //1.1--es6模板字符串，，${变量名}可以省略+号拼接字符串
// var name = '瞪璇';
// var age = 23;
// var message = `你好${name},你今年${age}岁了!`;
// console.log(message); 
// //也可以这么写直接输出
// console.log(`你好${name},你今年${age}岁了!`);


// //1.2--字符串的长度
// var s = 'get busy living or get busy dying';
// console.log(s.length);


// //1.3--用索引取到字符串
// var s = 'get busy living or get busy dying';
// console.log(s[0]);
// console.log(s[9]);

// //1.4--字符串是不可变的，对某个字符串的索引赋值不会改变字符串
// var s = 'busy';
// s[1] = 't';
// console.log(s);  //依然输出busy

// //--------------------------------------
// //1.5--js提供了对字符串的操作一些函数，但是并不改变字符串，而是返回一个新的字符串
// //字符串整体全部变成大写toUpperCase()，全部变成小写的方法toLowerCase()
// var s = 'hello world';
// var s1 = s.toUpperCase();
// console.log(s.toUpperCase());  //HELLO WORLD
// console.log(s1.toLowerCase());  //hello world
// console.log(s);    //字符串s的值并未被改变


// //1.6--查询指定字符串并返回索引，根据索引查询返回字符串
// var s = 'hello world';
// console.log(s.indexOf('llo'))   //2
// console.log(s.indexOf('World'));   //没有返回-1
// console.log(s.substring(2,7))   //llo w  左包右不包
// console.log(s.substring(2,19));   //llo world
// console.log(s.substring(6));     //从索引6开始一直截取到最好

// //---------------------------------------------------------------------
// //2.0--数组
// //元素可以包含任意的内容
// var arr = [1, 5, 'hello', null, true];
// console.log(arr.length);
// //也可以给数组的长度重新赋值,超出的会被赋值为undefined
// arr.length = 8;
// console.log(arr);    // [1, 5, "hello", null, true, undefined , undefined , undefined];
// arr.length = 4;
// console.log(arr);   //[1, 5, "hello", null]

// //2.1--通过索引获取数组对应的元素
// var arr = ['hello', 1, 2, false];
// console.log(arr[0]);
// console.log(arr[3]);
// //超出会返回undefined
// console.log(arr[7]);   //undefined

// //2.2--可以通过索引对元素进行重新赋值
// var arr = [2, 5, 'hello', null];
// arr[0] = false;
// console.log(arr);   //[false, 5, "hello", null]
// arr[3] = 99;
// console.log(arr);   //[false, 5, "hello", 99]
// //超出就会加长数组长度，没有赋值的元素变为undefined
// arr[5] = 88;
// console.log(arr);  //[false, 5, "hello", 99, undefined, 88]

// //2.3-数组可以通过indexOf()方法，查找元素的索引
// var arr = [4, 5, 'hello', false];
// console.log(arr.indexOf('hello'));  //2
// console.log(arr.indexOf('Hello'));  //-1

// //注意注意===========slice()方法会返回一个新的数组，不会改变原先的数组
// //2.4--数组可以通过slice()返回截取指定范围元素的一个新数组，不会改变原数组 
// var arr =[4, 5, 'hello', false];
// console.log(arr.slice(1,3));  //[5, "hello"]  包左不包右
// console.log(arr);  //[4, 5, 'hello', false]  //原数组不会被改变
// console.log(arr.slice(1,9));  //[5, "hello", false]
// console.log(arr.slice(2));    //从索引2开始一直截取到最后["hello", false]

// //2.4.1 --利用slice()方法，不传参数可以把一个数组从头截取的尾部，可以快速复制一个数组
// var arr = [3, 6, 'hello', false];
// arr1 = arr.slice();
// console.log(arr1);   //[3, 6, "hello", false]

// //2.5 --push()和pop()方法对数组进行操作 pop()表示把数组最后一个元素删除
// var arr = [3, 5, 'hello', 'world', false];
// console.log(arr.push(99,88));   //返回arr的新长度7
// console.log(arr);      //改变原有的arr的值[3, 5, "hello", "world", false, 99, 88]
// console.log(arr.pop());       //返回删除的最后一个元素88（返回类型是字符串）
// console.log(arr.pop());   //返回的删除的最后一个元素99

// //2.6--unshift()方法在数组的头部添加一个元素，，shift()方法删除数组头部的第一个元素
// var arr = [5, 8];
// console.log(arr.unshift(88,'world'));  //返回修改后的数组的长度
// console.log(arr);  //[88, "world", 5, 8, "hello", true]
// console.log(arr.shift());     //返回删除的数组的第一个元素88
// //空数组继续shift()不会报错，会返回undefined
// arr.shift();
// arr.shift();
// arr.shift();
// console.log(arr);
// console.log(arr.shift());  //undefined

// //2.7--sort()可以对数组中元素默认排序，但是可以用高阶函数进行指定的排序。
// var arr = ['B','A','C','D'];
// console.log(arr.sort());  //["A", "B", "C", "D"]
// console.log(arr);    ////["A", "B", "C", "D"]改变了原先的数组

// //2.8 --reverse()方法，将数组的元素反转掉个
// arr = [6,8,'hello','world'];
// console.log(arr.reverse());  //["world", "hello", 8, 6]
// console.log(arr);  //["world", "hello", 8, 6]  改变了原先数组

// //2.9--splice()方法是修改数组的万能方法
// var arr = [3, 7, 9, 'hello', 'world', 'javascript'];
// //从索引2开始,包括索引2，删除之后3个元素，在添加2个元素
// console.log(arr.splice(2, 3, '88', '99'));  //返回删除的元素组成的数组[9, "hello", "world"]
// console.log(arr);    //[3, 7, '88', '99', 'javascript']  改变了原先的数组
// //只删除不添加
// console.log(arr.splice(2, 2))  //['88','99'];
// console.log(arr);  //[3, 7, "javascript"]
// //只添加不删除
// console.log(arr.splice(2, 0, 99, 'hello'));  //返回[]空的数组
// console.log(arr);  //[3, 7, 99, "hello", "javascript"]

// //2.10--concat()方法将一个数组与另一个数组连接起来，返回一个新数组
// var arr1 = [1,'hello','world'];
// var arr2 = [2,'hello','javascript'];
// console.log(arr1.concat(arr2));  //[1, "hello", "world", 2, "hello", "javascript"]
// console.log(arr1);  //没有改变
// console.log(arr2);  //没有改变
// //concat()方法可以接收任意的参数和数组，并且把数组拆开，最后拼成一个数组
// console.log(arr1.concat(1,2,['hello','world']));  //[1, "hello", "world", 1, 2, "hello", "world"]

// //2.11--join方法，把当前数组的每个元素按照指定的方式拼接并且返回拼接后的字符串
// var arr = ['A','B','C','D'];
// console.log(arr.join('-'));  //返回的是字符串：A-B-C-D
// console.log(arr);  //不改变原有数组["A", "B", "C", "D"]
// var arr1 = [1,2,3,4,5];
// console.log(arr1.join('-'));  //1-2-3-4-5
// var arr2 = ['hello','world'];
// console.log(arr2.join('-'));  //hello-world

// //2.12--练习，新生名单arr = ['小明','小红','大军','阿黄']，拼接显示字符串：欢迎XXX，XXX，XXX和XXX同学！
// var arr = ['小明', '小红', '大军', '阿黄'];
// var arr1 = arr.slice(0,3);
// var str = arr1.join(',');
// console.log(str);
// alert('欢迎'+str+'和'+arr.pop()+'同学！');

// //-------------------------------------------------------------------------
// //3.0 --对象,最后一个元素不用加逗号，否则低版本浏览器会报错
// var Person = {
//     name: 'bob',
//     age: 20,
//     friends: ['jack', 'alice', 'lily'],
//     city: 'chongqing',
//     hasCar: true,
//     code: null,
//     //如果属性名中含有特殊字符，就需要给属性名加引号
//     'middle-school': 'biyangyigao'
// }
// console.log(Person.name);  //job
// console.log(Person.friends[0]);   //jack
// console.log(Person.code);  //null
// console.log(Person.sex);   //undefined
// //含有特殊字符的属性名不能用.调取，只能通过Object.['xxx']来获取
// console.log(Person['middle-school']);  //biyangyigao
// //可以为Person对象任意添加属性，删除用delete
// Person.money = 222;
// delete Person.city;  //删除这个属性
// console.log(Person.city);  //undefined
// console.log(Person.money);

// //检测某个属性是否在某个对象中，用in,但是这个属性也可能是Person继承到的。
// console.log('name' in Person);  //true
// console.log('company' in Person);  //false
// console.log('toString' in Person);  //true
// //要判断一个属性是自身拥有的还是继承的，可以用hasOwnProperty()
// console.log(Person.hasOwnProperty('toString'));  //false

// //条件判断 if else
// //js把null,undefined,0,NaN,和空字符串''都视为false,其他都视为true

// //4.0--循环
// var i = 0;
// var sum = 0;
// for (i = 0; i <= 100; i++) {
//     sum = sum + i;
// }
// console.log(sum);  //5050

// //用循环遍历数组
// var arr = [1, 2, 3, 4, 5, 6, 7];
// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// //也可以用无限循环，必须用if判断break退出
// var x = 1;
// for (; ;) {
//     if (x > 100) {
//         break;
//     }
//     console.log(x);
//     x++;
// }

// //4.1--for...in循环，可以取出一个对象的所有属性
// var Person = {
//     name: 'bob',
//     age: 20,
//     friends: ['jack', 'alice', 'lily'],
//     city: 'chongqing',
//     hasCar: true,
//     code: null,
//     //如果属性名中含有特殊字符，就需要给属性名加引号
//     'middle-school': 'biyangyigao'
// }
// //重要：hasOwnProperty()这个方法传入的参数必须是字符串，所以在传入name时必须加分号
// console.log(Person.hasOwnProperty('name'));
// //遍历key in Person后，key搬来就是字符串，所以不用加分号''
// for(var key in Person){
//     if(Person.hasOwnProperty(key)){
//         console.log(key);
//     }
// }

// //数组也是对象，因此数组的索引可以作为对象的属性
// var arr = [1,2,3,4];
// for(var key in arr){
//     console.log(key);  //返回的都是字符串：'0','1','2','3'
//     console.log(arr[key]);  //返回的都是字符串：'1','2','3','4'
// }

// //4.2--while循环，求100以内的奇数的和
// var x = 0;
// var n = 99;
// while (n > 0) {
//     x = x + n
//     n = n - 2;
// }
// console.log(x);  //2500

// //4.3--do...while循环，求100以内的奇数的和
// var x = 0;
// var n = 99;
// do {
//     x = x + n;
//     n = n - 2;
// } while (n > 0);  //条件是n>0，只要满足这个条件就一直执行
// console.log(x);   //2500

// //总结：for循环是满足条件之后进行循环，所以for循环有可能不执行逻辑。
// //     while循环是先判断条件，条件符合再执行循环。
// //     do...while循环是先执行语句，再判断条件。

// //5.0--js的对象有一个小问题，就是属性名（键）必须是字符串，
// //所以ES6新的规范 Map和Set，可以用Number或者其他类型作为键
// //用js写一个Map如下：
// var m = new Map([['jack', 20], ['rose', 25], ['xuan', 23]]);
// console.log(m.get('jack'));  //20
// //初始化一个空的Map
// var m1 = new Map();
// m1.set('jack',20);
// m1.set('xuan',25);
// console.log(m.has('jack'));  //true
// console.log(m.get('xuan'));  //23
// console.log(m.delete('rose'));  //删除成功返回true
// console.log(m.delete('yang'));  //没有这个key所以删除失败返回false
// console.log(m.get('rose'));  //删除后rose是undefined
// //对一个键重复的赋值，后续的会覆盖前面的值
// console.log(m.set('liang',23));  //会返回整个赋值后的Map
// console.log(m.set('liang',99));  //会返回整个覆盖某个值之后的Map
// console.log(m.get('liang'));    //99

// //5.1--Set，只存储不重复的key，不存储value值。
// //   如果Set中的key重复，则会自动过滤掉重复的key
// var s1 = new Set();  //空的Set
// var s2 = new Set([1, 2, 3]);
// //重复元素在Set中会被过滤
// var s = new Set([1, 2, 3, 4, 3, 2, 5, 6, 1]);
// console.log(s);  //{1,2,3,4,5,6}
// //通过add(key)来增加Set的key
// console.log(s.add(0));  //输出增加元素后的Set{1,2,3,4,5,6,7}
// console.log(s.delete(5));  //删除成功返回true

// //5.2--集合的遍历，ES6标准引入了新的iterable统一集合类型
// //    iterable数据类型可以通过for...of进行循环

// var a = ['A', 'B', 'C'];
// var s = new Set(['A', 'B', 'C']);
// var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
// for(var x of a){
//     console.log(x);  //遍历Array
// }
// for(var x of s){
//     console.log(x);  //遍历Set
// }
// for(var x of m){
//     console.log(x);  //遍历之后是一个数组
//     console.log(x[1]);  //可以用数组的索引打印出数组元素
// }

// //5.3--for...in的历史遗留原因
// //由于Array也是对象，每个元素的索引可以视为一个属性 ，所以可以为Array添加属性
// var arr = ['A', 'B', 'C'];
// arr.name = 'jack';
// for (var x in arr) {
//     console.log(x);  //0,1,2,name
// }
// console.log(arr.length);  //3
// //for...in会把arr的属性都遍历,忽视数组的length属性
// //for...of只会循环集合本身的元素
// for (var x of arr) {
//     console.log(x);  //A,B,C
// }

// //5.4--iterable内置的forEach方法，它接收一个函数，每次迭代都会自动回调该函数
// var a = ['A','B','C'];
// a.forEach(function(index,array){
//     console.log(index);
//     console.log(array);
//     // console.log(array);
// });



let timeTemp1 = {}
time = ["2017-08", "2017-07", "2017-06", "2016-12", "2016-11","2015-11"]
for(var i = 0; i < time.length; i++){
    if (!timeTemp1[time[i].split('-')[0] + '年']) {
        timeTemp1[time[i].split('-')[0] + '年'] = [];
    }
    timeTemp1[time[i].split('-')[0] + '年'].push(time[i].split('-')[1] + '月')
    // timeTemp.push(time[i].split('-')[0]);
}
console.log(timeTemp1)