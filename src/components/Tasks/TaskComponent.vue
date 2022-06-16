<template>
  <div class="container sm:flex flex-col gap-6 items-center md:items-end">
    <div
      class="container shadow-md grid grid-rows-2 grid-cols-3 p-5 gap-2 rounded-lg bg-gradient-to-r from-slate-50 to-gray-100 opacity-90 hover:opacity-100 hover:shadow-lg border-2 border-solid border-white"
    >
      <h1 class="text-left font-bold col-span-2">{{ task.name }}</h1>
      <p class="text-right">{{ task.deadline }}</p>
      <div class="col-span-3 flex justify-end items-end gap-2">
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
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CheckIcon, XIcon } from "@heroicons/vue/solid";
import Task from "@/assets/types/Task";

export default defineComponent({
  name: "HelloWorld",
  props: {
    task: {
      type: Object as PropType<Task>,
      required: true,
    },
  },
  components: {
    CheckIcon,
    XIcon,
  },
});
</script>
