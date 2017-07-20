new Vue({
    el:'#editor',
    data:{
        input:'# hello'
    },
    computed:{
        compiledMarkdown:function () {
            return marked(this.input,{snitize:true})
        }
    },
    methods:{
        update: _.debounce(function(e){
            this.input = e.target.value
        },300)
    }
})

//第一是绑定id=editor
//第二是 v-bind绑定到textarea的value