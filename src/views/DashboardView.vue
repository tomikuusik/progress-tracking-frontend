<template>
  <div
    class="home lg:grid md:inline-flex flex-col mt-5 gap-3 grid-cols-2 justify-center"
  >
    <StatsComponent
      class="col-start-2 row-start-1 p-2 border border-gray-200 rounded-lg bg-slate-50 h-min"
    />
    <TaskListComponent
      class="col-start-1 row-start-1 p-2 border border-gray-200 rounded-lg bg-slate-50 h-min"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskListComponent from "@/components/TaskListComponent.vue";
import StatsComponent from "@/components/StatsComponent.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    TaskListComponent,
    StatsComponent,
  },
});
</script>
