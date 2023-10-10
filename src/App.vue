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
      <img src="./assets/pinia-logo.svg" alt="logo" class="logo">
      <h2 class="font-semibold text-[35px] text-slate-600">{{ task.name }}</h2>
      <div class="container w-full">
        <div class="flex justify-center items-center">
          <div @click="task.all" class="filter__btn rounded-tl-lg" :class="task.display == 'all' ? 'active__filter' : 'border-b-2 border-transparent' ">All ({{ task.tasks.length }})</div>
          <div @click="task.fav" class="filter__btn " :class="task.display == 'fav' ? 'active__filter' : 'border-b-2 border-transparent' ">Favorite ({{ task.favs.length }})</div>
          <div @click="task.com" class="filter__btn rounded-tr-lg" :class="task.display == 'com' ? 'active__filter' : 'border-b-2 border-transparent' ">Completed ({{ task.completed.length }})</div>
        </div>
      </div>
      </div>
    </header>

    <div class="container mx-auto flex flex-col items-center justify-center ">
      <TaskAdd  />
      <!-- Taks list -->
      <Transition>
        <div class="task-list w-full" v-if="task.display == 'all'">
          <p>all tasks</p>
          <TaskDetails v-for="task in task.allTask" :task="task" :key="task.id" />
        </div>
      </Transition>

      <Transition>
        <div class="task-list w-full"  v-if="task.display == 'fav'">
          <p>favorite</p>
          <TaskDetails v-for="task in task.favs" :task="task" :key="task.id" />
        </div>
      </Transition>

      <Transition>
        <div class="task-list w-full"  v-if="task.display == 'com'">
          <p>Completed</p>
          <TaskDetails v-for="task in task.completed" :task="task" :key="task.id" />
        </div>
      </Transition>
    </div>
  </main>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transform: translateY(0px);
  transition: all 0.5s ease;
}
.v-leave-active {
  display: none;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-from{
  transform: translateY(50px);
}
</style>