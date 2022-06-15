<template>
  <div class="container flex-wrap align-around justify-center mx-auto flex">
    <CourseComponentVue
      v-for="course in store.getters.getCourses"
      :key="course"
      :course="course"
      @click="clickOnCourse(course)"
    />
  </div>
  <transtion>
    <EditCoursePopupVue
      v-if="store.getters.getCourseModificationWindowStatus"
    />
  </transtion>
</template>
<script setup lang="ts">
import store from "@/store";
import { reactive } from "vue";
import CourseComponentVue from "../components/CourseComponent.vue";
import EditCoursePopupVue from "@/components/EditCoursePopup.vue";
function clickOnCourse(course) {
  store.dispatch("courseModificationWindowOpenRequest", course);
}
</script>
