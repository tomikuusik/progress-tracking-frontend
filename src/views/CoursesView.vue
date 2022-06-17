<template>
  <div class="container flex-wrap align-around justify-center mx-auto flex">
    <CourseComponentVue
      v-for="course in store.getters.getCourses"
      :key="course"
      :course="course"
    />
  </div>
</template>
<script setup lang="ts">
import store from "@/store";
import CourseComponentVue from "../components/CourseComponent.vue";
import EditCoursePopupVue from "@/components/EditCoursePopup.vue";
</script>
