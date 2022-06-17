<template>
  <div
    class="container shadow-md rounded-lg bg-gradient-to-r from-slate-50 to-gray-100 opacity-90 hover:opacity-100 hover:shadow-lg border-2 border border-white hover:cursor-pointer active:cursor-grab md:grid md:grid-cols-3 p-8"
  >
    <div
      class="container mx-auto grid grid-cols-2 w-fit col-start-1 col-span-2"
    >
      <p class="field-box left col-start-1 row-start-2">Name:</p>
      <p class="field-box left col-start-1 row-start-3">Description:</p>
      <p class="field-box right col-start-2 row-start-2">
        {{ course.name }}
      </p>
      <p class="field-box right col-start-2 row-start-3">
        {{ course.description }}
      </p>
    </div>
    <div
      class="container flex lg:flex-col justify-center content-center items-center gap-2 col-start-3 row-span-full"
    >
      <button
        class="rounded-lg border-solid border-white border-2 drop-shadow h-8 w-32 bg-gradient-to-r from-slate-100 to-slate-50 hover:drop-shadow-md active:scale-95 uppercase font-black text-lg text-sky-900"
      >
        Tasks
      </button>
      <button
        class="rounded-lg border-solid border-white border-2 drop-shadow h-8 w-32 bg-gradient-to-r from-slate-100 to-slate-50 hover:drop-shadow-md active:scale-95 uppercase font-black text-lg text-sky-900"
        @click="store.dispatch('courseModificationWindowOpenRequest', course)"
      >
        Edit
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import Course from "@/assets/types/Course";
import { defineProps, PropType } from "vue";
import store from "@/store";
defineProps({
  course: {
    required: true,
    type: Object as PropType<Course>,
  },
});
</script>
<style lang="scss">
.field-box {
  width: 100%;
  border-style: solid;
  border-color: #e5e7eb;
  border-bottom-width: 1px;
  text-align: left;
  & + .right {
    text-align: right;
  }
}
</style>
