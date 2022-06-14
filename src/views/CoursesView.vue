<template>
  <div class="container flex-wrap align-around justify-center mx-auto flex">
    <CourseComponentVue
      v-for="number in 10"
      :key="number"
      :course="store.state.courses[0]"
    />
  </div>
</template>
<script setup lang="ts">
import store from "@/store";
import CourseComponentVue from "../components/CourseComponent.vue";
</script>
