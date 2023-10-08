<template>
    <div class="flex gap-6 flex-nowrap px-16 py-3">
        <input v-model="task.task" type="text" class="p-2 rounded-md w-3/4 outline-none">
        <button @click="task.add" class="p-2 w-1/4 bg-gray-400 rounded-md text-white hover:bg-gray-500">Add</button>
    </div>
</template>

<script setup>

import { useTaskStore } from '../store/TaskStore';
const task = useTaskStore();
</script>

<style lang="scss" scoped>

</style>