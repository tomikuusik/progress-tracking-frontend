<template>
  <div
    class="tasklist mx-auto flex flex-col gap-4 p-2 border border-gray-200 rounded-lg bg-slate-50 h-min"
  >
    <h1 class="text-xl md:text-3xl font-bold text-slate-600">
      {{ props.title }}
    </h1>
    <TaskComponent :task="state.task" v-for="number in 5" :key="number" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import TaskComponent from "./Tasks/TaskComponent.vue";
import { defineProps } from "vue";

const state = reactive({
  task: {
    id: 1,
    task_name: "Interview",
    course_code: "LTAT.05.007",
    course_name: "Human Computer Interaction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at enim ut arcu faucibus tempus.",
    points: 30,
    deadline: "10022022",
  },
});
const props = defineProps({
  title: String,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tasklist {
  // width: max-content;
  width: 100%;
}
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
</style>
