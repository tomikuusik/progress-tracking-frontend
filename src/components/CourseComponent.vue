<template>
  <div
    class="container max-w-fit w-128 m-5 p-5 shadow-md rounded-lg bg-gradient-to-r from-slate-50 to-gray-100 opacity-90 hover:opacity-100 hover:shadow-lg border-2 border border-white hover:cursor-pointer active:cursor-grab"
  >
    <div class="container mx-auto grid grid-cols-2 w-fit">
      <p class="field-box left col-start-1 row-start-1">ID:</p>
      <p class="field-box left col-start-1 row-start-2">Name:</p>
      <p class="field-box left col-start-1 row-start-3">Description:</p>
      <p class="field-box left col-start-1 row-start-4">Maximum points:</p>
      <p class="field-box left col-start-1 row-start-5">
        Best possible result:
      </p>
      <p class="field-box left col-start-1 row-start-6">Points lost:</p>

      <p class="field-box right col-start-2 row-start-1">
        {{ course.id }}
      </p>
      <p class="field-box right col-start-2 row-start-2">
        {{ course.name }}
      </p>
      <p class="field-box right col-start-2 row-start-3">
        {{ course.description }}
      </p>
      <p class="field-box right col-start-2 row-start-4">
        {{ course.maxpoints }}
      </p>
      <p class="field-box right col-start-2 row-start-5">
        {{ course.gainedpoints }}
      </p>
      <p class="field-box right col-start-2 row-start-6">
        {{ course.lostpoints }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import Course from "@/assets/types/Course";
import { defineProps, PropType } from "vue";
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
