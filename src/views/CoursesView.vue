<template>
  <div class="container flex-wrap align-around justify-center mx-auto flex">
    <CourseComponentVue
      v-for="course in store.getters.getCourses"
      :key="course"
      :course="course"
    />
  </div>
  <Transition>
    <EditCoursePopupVue
      v-if="store.getters.getCourseModificationWindowStatus"
    />
  </Transition>
</template>
<script setup lang="ts">
import store from "@/store";
import CourseComponentVue from "../components/CourseComponent.vue";
import EditCoursePopupVue from "@/components/EditCoursePopup.vue";
</script>
<style lang="scss" scoped>
.v-enter-active {
  transition: opacity 0.5s ease;
}
.v-leave-active {
  transition: none;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
