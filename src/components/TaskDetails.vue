<script setup>
    defineProps({
        task: {
            type: Object,
            default: {}
        }
    })
</script>
<template>
    <div class="task grid grid-cols-12">
        <h3 class="col-span-1">ID {{ task.id }}</h3>
        <h3 class="col-span-9">{{ task.title }}</h3>
        <div class="icons col-span-2">
            <i class="material-icons">delete</i>
            <i class="material-icons">favorite</i>
        </div>
    </div>
</template>