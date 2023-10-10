<template>
    <div class="flex gap-6 flex-nowrap p-3 mt-5 w-[640px] border-2 border-slate-300 rounded-lg bg-white">
        <input v-model="task.task" placeholder="task title..." type="text" class="p-2 rounded-md w-3/4 outline-none">
        <button @click="task.add" class="p-2 w-1/4 bg-gray-400 rounded-md text-white hover:bg-gray-500 flex items-center justify-center gap-1">
            <i class="material-icons text-[16px]">add</i> Add
        </button>
    </div>
</template>

<script setup>

import { useTaskStore } from '../store/TaskStore';
const task = useTaskStore();
</script>

<style lang="scss" scoped>

</style>