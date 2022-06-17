<template>
  <div
    id="progressContainer"
    class="grid grid-cols-2 grid-rows-4 row-start-3 col-start-1 row-span-4 col-span-1 rounded-lg bg-slate-50 p-2 pl-6 opacity-90 hover:opacity-100 drop-shadow hover:drop-shadow-md border-2 border border-white h-min bg-gradient-to-r from-slate-50 to-gray-100"
  >
    <h2
      class="row-start-1 col-start1 font-bold text-slate-600 w-full text-start"
    >
      Progress
    </h2>
    <p class="row-start-2 col-start-1 text-start">Points</p>
    <p class="row-start-3 col-start-1 text-start">Lost</p>
    <p class="row-start-4 col-start-1 text-start">Ideal result</p>

    <h2
      class="row-start-1 col-start-2 font-bold text-slate-600 w-full text-start"
    >
      {{ progress }}%
    </h2>
    <p class="row-start-2 col-start-2 text-start">
      {{ course.gainedpoints }}/{{ course.maxpoints }}
    </p>
    <p class="row-start-3 col-start-2 text-start">{{ course.lostpoints }}</p>
    <p class="row-start-4 col-start-2 text-start">
      {{ idealResult }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { defineProps, PropType, ComputedRef, computed } from "vue";
import Course from "@/assets/types/Course";
const props = defineProps({
  course: {
    type: Object as PropType<Course>,
    required: true,
  },
});
const progress: ComputedRef<number> = computed(() => {
  return Math.round((props.course.gainedpoints / props.course.maxpoints) * 100);
});

const idealResult: ComputedRef<number> = computed(() => {
  return props.course.maxpoints - props.course.lostpoints;
});
</script>
<style lang="scss" scoped>
#progressContainer * {
  border-bottom-width: 1px;
  border-color: rgb(229 231 235);
}
</style>
