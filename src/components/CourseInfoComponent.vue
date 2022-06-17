<template>
  <div class="flex flex-col mt-5">
    <div
      class="flex flex-col md:flex-row gap-2 md:gap-5 w-full justify-between"
    >
      <div class="w-full flex flex-col md:flex-row justify-start gap-5">
        <h1 class="text-3xl font-bold text-center xl:text-left">
          {{ props.course.name }}
        </h1>
        <h1 class="text-3xl font-bold text-center xl:text-left">
          {{ props.course.code }}
        </h1>
      </div>
      <p class="text-lg w-full md:text-end">
        {{ startDate.getDate() }}/{{ startDate.getMonth() }}/{{
          startDate.getFullYear()
        }}
        -
        {{ endDate.getDate() }}/{{ endDate.getMonth() }}/{{
          endDate.getFullYear()
        }}
      </p>
    </div>
    <ProgressionBar :course="course" :show-goal="true" />
    <div class="flex flex-col lg:flex-row mt-5 gap-5">
      <ProgressInfoComponent
        class="xl:basis-1/3 md:basis-1/2"
        :course="props.course"
      />
      <CourseComponent class="xl:basis-2/3 md:basis-1/2" :course="course" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType, defineProps, computed, ComputedRef } from "vue";
import Course from "@/assets/types/Course";
import ProgressInfoComponent from "./CourseBoard/ProgressInfoComponent.vue";
import ProgressionBar from "./CourseBoard/ProgressionBar.vue";
import CourseComponent from "./CourseComponent.vue";

const props = defineProps({
  course: {
    type: Object as PropType<Course>,
    required: true,
  },
});

const startDate: ComputedRef<Date> = computed(() => {
  //   const parsedDate: Array<string> = props.course.startdate.split("");
  const parsedDate: Array<string> = "01102021".split("");
  const day = Number(parsedDate.slice(0, 2).join(""));
  const month = Number(parsedDate.slice(2, 4).join("")) - 1;
  const year = Number(parsedDate.slice(4, 8).join(""));
  const date = new Date(year, month, day);
  return new Date();
});
const endDate: ComputedRef<Date> = computed(() => {
  //   const parsedDate: Array<string> = props.course.enddate.split("");
  const parsedDate: Array<string> = "01062022".split("");
  const day = Number(parsedDate.slice(0, 2).join(""));
  const month = Number(parsedDate.slice(2, 4).join(""));
  const year = Number(parsedDate.slice(4, 8).join(""));
  return new Date(year, month, day);
});
</script>
