//属性与方法
// var data = {a:1}
// var vm = new Vue({
//     data:data
// })
// //Vue实例都会代理data对象里所有的属性
// console.log(vm.a === data.a);
// //设置属性会影响到原始数据
// vm.a = 2
// console.log(data.a);
// //反之也是
// data.a = 3
// console.log(vm.a)

//实例的声明周期，created这个钩子在实例被创建后被调用
var vm = new Vue({
    data:{
        a:1
    },
    created: function () {
        console.log('a is:'+this.a)
    }
})
//模板语法
//#文本  最常见的是使用双大括号
var app8 = new Vue({
    el:'#app-8',
    data:{
        msg:"Hello Msg Hell"
    }
})

//绑定class属性
var app8_1 = new Vue({
    el:'#app-8-1',
    data:{
        msg:"Hello Msg xxx"
    }
})

// 可以将class绑定成数据里的一个对象
var app9 = new Vue({
    el:'#app-9',
    data:{
        classObject:{
            active:true,
            'text-danger':true
        }
    }
})
//绑定返回对象的计算属性
var app9 = new Vue({
    el:'#app-10',
    data:{
        isActive: true,
        error: null
    },
    computed:{
        classObject:function(){
            return{
                active:this.isActive && !this.error,
                'text-danger':!this.error
            }
        }
    }
})

//绑定class是一个数组
var app11 = new Vue({
    el:'#app-11',
    data:{
        activeClass:'active',
        errorClass:'text-danger'
    }
})

//绑定
var app12 = new Vue({
    el:"#app-12",
    data:{
        styleObject:{
            color:'red',
            fontSize:'30px'
        }
    }
})

var example1 = new Vue({
  el: '#app-13',
  data: {
    items: [
      {message: 'Foo' },
      {message: 'Bar' }
    ]
  }
})

//注册组件时，必须把data的值变成一个函数，此示例是将data
Vue.component('simple-counter',{
    template:'<button v-on:click="counter += 1">{{counter}}</button>',
    data:function(){
        return {
            counter:0
        }
    }
})

new Vue({
    el:'#example-2'
})
//动态prop
/* Vue.component('child',{
    template:'<span>{{message}}</span>',
    props:['message']
})

new Vue({
    el:'#example-3',
}) */

Vue.component('child',{
    template:'<span>{{my-message}}</span>',
    props:['my-message']
})

new Vue({
    el:'#example-4',
})
















