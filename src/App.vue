<script setup>
import { useTaskStore } from './store/TaskStore';
import TaskDetails from './components/TaskDetails.vue';
import TaskAdd from './components/TaskAdd.vue';
const task = useTaskStore();

</script>

<template>
  <main>
    <!-- heading -->
    <header >
      <div class="container mx-auto flex flex-col items-center">
      <img src="./assets/pinia-logo.svg" alt="logo">
      <h1>{{ task.name }}</h1>
      <div class="container w-full">
        <div class="flex justify-center items-center">
          <div @click="task.all" class="px-6 py-2 bg-gray-300 cursor-pointer hover:bg-gray-400">All ({{ task.tasks.length }})</div>
          <div @click="task.fav" class="px-6 py-2 bg-gray-300 cursor-pointer hover:bg-gray-400">Favorite ({{ task.favs.length }})</div>
        </div>
      </div>
      </div>
    </header>

    <div class="container mx-auto flex flex-col justify-center ">
      <TaskAdd  />
      <!-- Taks list -->
      <div class="task-list w-full" v-if="task.display == 'all'">
        <p>all tasks</p>
        <TaskDetails v-for="task in task.tasks" :task="task" :key="task.id" />
      </div>

      <div class="task-list w-full"  v-if="task.display == 'fav'">
        <p>favorite</p>
        <TaskDetails v-for="task in task.favs" :task="task" :key="task.id" />
      </div>
    </div>
  </main>
</template>

