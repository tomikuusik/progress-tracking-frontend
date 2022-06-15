<template>
  <div class="container flex-wrap align-around justify-center mx-auto flex">
    <CourseComponentVue
      v-for="course in store.getters.getCourses"
      :key="course"
      :course="course"
    />
  </div>
  <EditCoursePopupVue v-if="store.getters.getCourseModificationWindowStatus" />
</template>
<script setup lang="ts">
import store from "@/store";
import { reactive } from "vue";
import CourseComponentVue from "../components/CourseComponent.vue";
import EditCoursePopupVue from "@/components/EditCoursePopup.vue";
</script>
