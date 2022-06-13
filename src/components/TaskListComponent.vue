<template>
  <div class="tasklist mx-auto flex flex-col gap-4">
    <TaskComponent :task="task" v-for="number in 5" :key="number" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskComponent from "./Tasks/TaskComponent.vue";
import Task from "@/assets/types/Task";

export default defineComponent({
  name: "TaskListComponent",
  components: {
    TaskComponent,
  },
  data() {
    return {
      task: new Task(
        1,
        "ETA_12",
        "HCI",
        "This is some description",
        10,
        14102022
      ),
    };
  },
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
