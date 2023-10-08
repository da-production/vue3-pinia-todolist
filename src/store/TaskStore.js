import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore',{
    state: ()=>({
        tasks:[
            {id:1,title:'Learn Laravel', isFav:true},
            {id:2,title:'Learn ReactJs', isFav:false}
        ],
        task:null,
        name:'Pinia Store',
        display:'all',
        c:0
    }),
    getters:{
        favs(){
            return this.tasks.filter(s=> s.isFav)
        },
        lastID(){
            return this.tasks[this.tasks.length - 1].id + 1
        }
    },
    actions:{
        all(){
            return this.display = 'all'
        },
        fav(){
            return this.display = 'fav'
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
        isFav(){
            
        }
    }
});