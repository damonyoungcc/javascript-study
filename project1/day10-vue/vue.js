//通过如下的方式可以引入一个Vue
//<Script src="https://unpkg.com/vue">
//<Script>

//声明式渲染

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Hell'
    }
})

//绑定DOM元素的属性
// <div id="app-2">
//     <span v-bind:title="message">鼠标悬停几秒查看此处动态绑定的提示信息！</span>
// </div>

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于' + new Date()
    }
})
//v-bind代表指令，指令前带有v-，以表示他们是Vue提供的特殊属性。
//这个指令的作用是：将这个元素节点的title属性和Vue实例的meaasge属性保持一致。

//条件与循环
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})
//这个例子显示不仅可以绑DOM文本到数据，也可以绑定DOM结构到数据.而且Vue提供了一个强大的过渡效果系统，可以在vue插入/更新/删除元素时自动应用过度效果

//v-for可以绑定数组的数据来渲染一个项目列表
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: '学习Javascript' },
            { text: '学习Vue' },
            { text: '整个牛逼项目Go to Hell' }
        ]
    }
})

//v-on绑定事件
//点击按钮，给按钮绑定一个事件监听器，通过它调用我们Vue中的实例中定义的方法
//在这里我们更新了应用的状态，但是没有触碰到DOM，所有的DOM操作都是由Vue处理的。
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

//v-module实现表单输入和应用状态之间的双向绑定
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue'
    }
})


//Vue组件本质上是一个拥有预定义选项的一个Vue实例。
//定义名为todo-item的新组件
Vue.component('todo-item', {
    props: ['todo'],    //用于绑定DOM元素的属性  ，传递数据
    template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 0, text: '奶酪' },
            { id: 0, text: '随便其他什么人吃的东西' }
        ]
    }
})

var static = new Vue({
    el: '.static',
    data: {
        isActive: true,
        hasError: false
    }
})
