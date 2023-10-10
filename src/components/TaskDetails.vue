<script setup>
    import {useTaskStore} from '../store/TaskStore.js'
    const t = useTaskStore();
    const props = defineProps({
        task: {
            type: Object,
        }
    })
    const isFav = props.task.isFav ? 'fav__active' : 'text-gray-300';
</script>
<template>
    <div class="task grid grid-cols-12">
        <h3 class="col-span-1">ID {{ task.id }}</h3>
        <h3 class="col-span-9">{{ task.title }}</h3>
        <div class="icons col-span-2">
            <i class="material-icons" @click="t.deleteTask(task.id)" >delete</i>
            <button @click="t.toggleFavorite(task.id)" class="flex items-start">
                <i class="material-icons " v-if="!props.task.isFav " >favorite</i>
                <i class="material-icons fav__active" v-if="props.task.isFav " >favorite</i>
            </button>
            <button class="flex items-start" @click="t.toggleCompleted(task.id)" >
            <i class="material-icons text-green-500"  v-if="props.task.completed">task</i>
            <i class="material-icons"  v-if="!props.task.completed">task</i>
            </button>
        </div>
    </div>
</template>