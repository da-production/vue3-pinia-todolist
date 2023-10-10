import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore',{
    state: ()=>({
        tasks:[
            {id:1,title:'Learn Laravel', isFav:true,completed:false},
            {id:2,title:'Learn ReactJs', isFav:false,completed:true}
        ],
        task:null,
        name:'Pinia Store',
        display:'all',
        c:0
    }),
    getters:{
        getTasks: (store) => store.tasks,
        getFavorites:(store) => store.tasks.filter(s=> s.isFav),
        getCompleted:(store)=> store.tasks.filter(s=> s.completed),
        getLastID(){
            return this.tasks[this.tasks.length - 1].id + 1
        },

    },
    actions:{
        displayAll(){
            return this.display = 'all'
        },
        displayFavorites(){
            return this.display = 'fav'
        },
        displayCompleted(){
            return this.display = 'com'
        },
        addTask(){
            if(this.task != null && this.task.length > 10){
                
                const newtask = {
                    id: this.getLastID,
                    title: this.task,
                    isFav:false
                }
                this.task = null
                return this.tasks.push(newtask);
            }else{
                alert('task most be not null and more than 10 characters')
            }
        },
        deleteTask(id){
            const newtasks = this.tasks.filter(t=>{
                return t.id !== id
            })
            this.tasks=newtasks
        },
        toggleFavorite(id){
            const task = this.tasks.find(t => t.id === id);
            task.isFav = !task.isFav
        },
        toggleCompleted(id)
        {
            const task = this.tasks.find(t=> t.id === id)
            task.completed = !task.completed
        }
    }
});