<template>
  <div
    class="container flex flex-col mx-auto items-center gap-12 pt-10 divide-slate-100 divide-solid divide-y-2 px-5"
  >
    <div class="flex gap-2 flex-wrap justify-center">
      <ButtonComponent
        @click="store.commit('setActiveCourse', course)"
        v-for="course in store.getters.getCourses"
        :key="course"
        :label="course.name"
        :active="activeCourse === course"
      />
      <ButtonComponent :label="'+'" />
    </div>
    <div class="container mx-auto">
      <CourseInfoComponent :course="activeCourse" />
    </div>
    <div class="container xl:grid xl:grid-cols-2 flex flex-col gap-2 pt-2">
      <TaskListComponent :title="'Uncompleted tasks'" />
      <TaskListComponent :title="'Completed tasks'" />
    </div>
    <Transition>
      <EditCoursePopup v-if="store.getters.getCourseModificationWindowStatus" />
    </Transition>
  </div>
</template>
<script setup lang="ts">
import store from "@/store";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { computed } from "@vue/reactivity";
import TaskListComponent from "@/components/TaskListComponent.vue";
import CourseInfoComponent from "@/components/CourseInfoComponent.vue";
import EditCoursePopup from "@/components/EditCoursePopup.vue";
const activeCourse = computed(() => {
  return store.getters.getActiveCourse;
});
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
