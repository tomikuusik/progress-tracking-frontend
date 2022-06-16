<template>
  <div class="w-full">
    <div id="flagContainer">
      <FlagComponent
        id="flag"
        :text="''"
        class="z-40"
        :style="{ left: adjustedGoal + '%' }"
        v-if="props.showGoal"
      />
    </div>
    <div id="parent" class="h-8 md:h-10 xl:h-14">
      <div
        class="bar w-full border-solid border-white border-4 bg-gradient-to-r from-stone-50 to-stone-200 h-8 md:h-10 xl:h-14 rounded-full z-10 drop-shadow-xl"
      ></div>
      <div
        class="bar bg-gradient-to-r w-1/2 rounded-full z-30 h-8 md:h-10 xl:h-14 border-solid border-white border-4 flex justify-center items-center"
        :style="{
          width: progress + '%',
          '--tw-gradient-from': color[0],
          '--tw-gradient-to': color[1],
        }"
      >
        <h1
          class="text-white font-bold xl:text-3xl md:text-xl select-none"
          v-if="progress >= 10"
        >
          {{ progress }}%
        </h1>
      </div>
      <div
        class="bar w-full w-3/4 bg-gray-300 rounded-full z-20 h-8 md:h-10 xl:h-14 border-solid border-white border-4 flex justify-end items-center pr-6 bg-gradient-to-r from-zinc-400 to-zinc-300"
        :style="{ width: theoreticalResult + '%' }"
      >
        <h1
          class="text-white font-bold xl:text-3xl md:text-xl opacity-75 z-40 select-none"
        >
          {{ theoreticalResultText }}
        </h1>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, computed, onMounted, defineProps, PropType } from "vue";
import Course from "@/assets/types/Course";
import FlagComponent from "@/components/CourseBoard/FlagComponent.vue";
const props = defineProps({
  showGoal: Boolean,
  course: { type: Object as PropType<Course>, required: true },
});
const state = reactive({
  screenwidth: window.innerWidth,
});
const color = computed(() => {
  if (progress.value >= 90) {
    return ["#a3e635", "#bef264"];
  }
  if (progress.value >= 70) {
    return ["#fde047", "#fef08a"];
  }
  if (progress.value >= 50) {
    return ["#f59e0b", "#fcd34d"];
  }
  return ["#ef4444", "#fb7185"];
});

const progress = computed(() => {
  return Math.round(
    (props.course?.gainedpoints / props.course?.maxpoints) * 100
  );
});

const adjustedGoal = computed(() => {
  if (state.screenwidth >= 1024) {
    return props.course.goal - 2;
  }
  if (state.screenwidth >= 768) {
    return props.course.goal - 3;
  }
  return props.course.goal - 4;
});

const theoreticalResult = computed(() => {
  return Math.round(
    ((props.course.maxpoints - props.course.lostpoints) /
      props.course.maxpoints) *
      100
  );
});

const theoreticalResultText = computed(() => {
  if (state.screenwidth >= 1024) {
    if (theoreticalResult.value - progress.value >= 35) {
      return "theoretically possible: " + theoreticalResult.value + "%";
    }
    if (theoreticalResult.value - progress.value >= 7) {
      return theoreticalResult.value + "%";
    }
  }
  if (state.screenwidth >= 768) {
    if (theoreticalResult.value - progress.value >= 25) {
      return theoreticalResult.value + "%";
    }
  }
  if (theoreticalResult.value - progress.value >= 40) {
    return "theoretically possible: " + theoreticalResult.value + "%";
  }
  if (theoreticalResult.value - progress.value >= 15) {
    return theoreticalResult.value + "%";
  }
  return "";
});

onMounted(() => {
  window.addEventListener("resize", setWidth);
});

function setWidth() {
  state.screenwidth = window.innerWidth;
}
</script>
<style lang="scss" scoped>
#parent,
#flagContainer {
  position: relative;
}

#flagContainer {
  top: 0.7em;
}
.bar {
  position: absolute;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
</style>
