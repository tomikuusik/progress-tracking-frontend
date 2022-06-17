<template>
  <div
    class="container shadow-md grid grid-cols-3 p-5 gap-2 rounded-lg bg-gradient-to-r from-slate-50 to-gray-100 opacity-90 hover:opacity-100 hover:shadow-lg border-2 border-solid border-white auto-rows-auto"
  >
    <div
      class="flex flex-row col-start-1 row-start-1 col-span-1 row-span-1 gap-5 items-center h-full"
    >
      <p class="font-bold text-slate-800 text-lg">
        {{ task.task_name }}
      </p>
      <h1 class="text-md text-left">{{ task.points }}p</h1>
    </div>
    <div
      class="col-start-2 col-span-2 row-star-1 flex flex-row gap-2 justify-end items-center text-slate-500 h-full"
    >
      <h1 class="font-bold">{{ task.course_name }}</h1>
      <p class="">{{ task.deadline }}</p>
    </div>
    <div
      class="col-start-1 col-span-3 row-start-2 flex flex-row gap-5 justify-between"
    >
      <p class="text-justify">
        {{ task.description }}
      </p>
      <div class="flex flex-col justify-end items-end gap-2 row-start-2">
        <div
          class="bg-gradient-to-r from-green-500 to-green-300 w-16 justify-center flex rounded-2xl cursor-pointer border-2 border-white hover:shadow-lg shadow-md active:cursor-grab active:scale-95"
        >
          <CheckIcon class="h-6" />
        </div>
        <div
          class="bg-gradient-to-r from-red-500 to-red-300 w-16 justify-center flex rounded-2xl shadow-md cursor-pointer border-2 border-white hover:shadow-lg active:cursor-grab active:scale-95"
        >
          <XIcon class="h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { CheckIcon, XIcon } from "@heroicons/vue/solid";
import Task from "@/assets/types/Task";

const props = defineProps({
  task: {
    type: Object as PropType<Task>,
    required: true,
  },
});
</script>
