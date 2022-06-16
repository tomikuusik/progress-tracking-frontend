<template>
  <div class="container flex flex-col mx-auto items-center gap-5 pt-10">
    <ProgressionBar
      v-for="course in store.getters.getCourses"
      :key="course"
      :course="course"
      :showGoal="false"
    />
  </div>
</template>
<script setup lang="ts">
import ProgressionBar from "@/components/CourseBoard/ProgressionBar.vue";
import store from "@/store";
</script>
