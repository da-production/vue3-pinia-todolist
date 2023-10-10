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
        allTask: (store) => store.tasks,
        favs:(store) => store.tasks.filter(s=> s.isFav),
        completed:(store)=> store.tasks.filter(s=> s.completed),
        lastID(){
            return this.tasks[this.tasks.length - 1].id + 1
        },

    },
    actions:{
        all(){
            return this.display = 'all'
        },
        fav(){
            return this.display = 'fav'
        },
        com(){
            return this.display = 'com'
        },
        add(){
            if(this.task != null && this.task.length > 10){
                
                const newtask = {
                    id: this.lastID,
                    title: this.task,
                    isFav:false
                }
                this.task = null
                return this.tasks.push(newtask);
            }else{
                alert('task most be not null and more than 10 characters')
            }
        },
        delete(id){
            const newtasks = this.tasks.filter(t=>{
                return t.id !== id
            })
            this.tasks=newtasks
        },
        toggleFav(id){
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