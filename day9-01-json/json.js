 var xiaoming = {
    name: 'xiaoming',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\"middle school', //如果对象的属性名中有特殊符号，就要用''引号引起来
    skills: ['javascript', 'java', 'python']
};
console.log(JSON.stringify(xiaoming, null, ' '));
//转换成的JSON对象，key必须是双引号，
//   {
//  "name": "xiaoming",
//  "age": 14,
//  "gender": true,
//  "height": 1.65,
//  "grade": null,
//  "middle-school": "\"W3C\"middle school",
//  "skills": [
//   "javascript",
//   "java",
//   "python"
//  ]
// }  


//写一个把选中的value都变成大写的函数
function toUpper(key, value) {
    if (typeof value === 'string') {
        value = value.toUpperCase();
    }
    return value;
}
console.log(JSON.stringify(xiaoming, toUpper, ' '))

/* {
 "name": "XIAOMING",
 "age": 14,
 "gender": true,
 "height": 1.65,
 "grade": null,
 "middle-school": "\"W3C\"MIDDLE SCHOOL",
 "skills": [
  "JAVASCRIPT",
  "JAVA",
  "PYTHON"
 ]
} */


//还可以给xiaoming添加一toJSON的方法，直接返回JSON应该序列化的数据
var xiaowang = {
    name: "小王",
    age: 17,
    gender: true,
    skill: ["js", "python", "java"],
    toJSON: function () {
        return {
            'name': this.name,
            'age': this.age
        };
    }
}
console.log(JSON.stringify(xiaowang));
//{"name":"小王","age":17}

//反序列化
//用JSON.parse()把json变成javascript对象
console.log(JSON.parse('[1,2,3,true]')); //[1, 2, 3, true]
console.log(JSON.parse('{"name:":"小明","age":14}')) //{name:: "小明", age: 14}
console.log(JSON.parse('true')) //true
console.log(JSON.parse('123.45')) //123.45
var str = 'true';
console.log(JSON.stringify(str)); //"true"
console.log(typeof JSON.parse('true')) //bollean
console.log(typeof JSON.parse('"true"')) //string

//反序列化还可以加一个函数
console.log(JSON.parse('{"name":"小明","age":15}', function (key, value) {
    if (key === "name") {
        value = value + '同学';
    }
    return value;
}));
//{name: "小明同学", age: 15} 

//指定的reviver函数，解析出js值之前，会经过这个函数的一次处理。
//解析值本身以及它包含的所有属性，会按照一定的顺序（从最里层的属性开始，一级级往外，最终达到顶层）
//如果reviver函数返回undefined，则当前的属性会从所属的对象中删除，如果返回了其他值，则返回的值会成为当前属性的新的属性值

JSON.parse('{"1":1,"2":2,"3":{"4":4,"5":{"6":6}}}',function(k,v){
    console.log(k);
    return v;
})
//1,2,4,6,5,3

console.log(JSON.parse('{"p":5}',function (k,v) {
        if(k === '')  return v;
        return v * 2;
    })
)