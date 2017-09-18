new Vue({
    el:'.todoapp',
    data:{
        lists:[
            {name:'vue'},
            {name:'vuex'}
            ],
        newTodo:''
    },
    methods: {
        add(){
            this.lists.push({
                name: this.newTodo
            })
            this.newTodo = ''
        },
        remove(index){
            this.lists.splice(index)
        }
    }
})