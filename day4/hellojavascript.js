//1.0 --继续高阶函数---filter()函数
//filter()函数把传入的参数依次作用于每个元素，根据返回值是true还是false来决定是否保留元素

//1.1 --练习，在一个数组中只保留偶数，删除奇数
/*var arr = [1,2,3,4,5,6,7,8];
function foo(x){
    return x%2 ===0;
}
console.log(arr.filter(foo));  //[2, 4, 6, 8]*/

//1.2 --练习，把一个数组中的空字符串删掉
/*var arr = ['A','B','',undefined,false,null];
console.log(arr.filter(function(x){
    return x != '';
}));   //["A", "B", undefined, null]*/

//filter()接收的回调函数可以接收多个参数
//第一个参数表示Array的某个元素，第二个参数表示元素的位置（索引），第三个参数表示数组本身
/*var arr = ['A', 'B', 'C'];
console.log(arr.filter(function (element, index, array) {
    return console.log(index);
}));*/

//利用filter()函数可以巧妙的去除数组中重复的元素
var arr = ['apple', 'xiaomi', 'microsoft', 'IBM', 'apple', 'xiaomi'];
console.log(arr.filter(function(ele,index,self){
    if(self.indexOf(ele) != index){
        return false;
    }else{
        return true;
    }
}));
//indexOf()方法只返回第一次出现要查找的元素的索引

//利用filter()筛选出素数
