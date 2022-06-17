<template>
  <div
    id="popup-container"
    class="backdrop-blur-sm flex justify-center items-center transition duration-1000 ease-in z-50"
  >
    <div
      id="close-button"
      class="w-12 h-12 bg-slate-200 fixed top-20 right-20 z-20 opacity-75 border-solid border-white border-2 rounded-lg hover:cursor-pointer active:cursor-grab"
      @click="close"
    >
      <XIcon />
    </div>
    <div
      id="popup"
      class="bg-gradient-to-r from-slate-50 to-gray-100 w-96 md:w-128 rounded-lg border-white border-solid border-2 drop-shadow p-8 flex flex-col gap-4 hover:shadow-violet-50 hover:shadow-2xl transition duration-400 ease-in-out"
    >
      <form class="container flex-col flex align-start">
        <label
          class="pl-1 text-left font-bold text-slate-500 uppercase text-sm"
        >
          name
        </label>
        <input
          type="text"
          v-model="course.name"
          class="p-2 h-8 w-full rounded-lg outline-0 border-white border-solid border-2 focus:bg-gradient-to-r focus:from-white focus:to-slate-50 focus:drop-shadow drop-shadow-sm bg-gradient-to-r from-slate-50 to-zinc-50"
        />
      </form>
      <form class="container flex-col flex align-start">
        <label
          class="pl-1 text-left font-bold text-slate-500 uppercase text-sm"
        >
          code
        </label>
        <input
          type="text"
          v-model="course.code"
          class="p-2 h-8 w-full rounded-lg outline-0 border-white border-solid border-2 focus:bg-gradient-to-r focus:from-white focus:to-slate-50 focus:drop-shadow drop-shadow-sm bg-gradient-to-r from-slate-50 to-zinc-50"
        />
      </form>
      <div
        class="grid grid-cols-4 grid-rows-2 gap-x-3 justify-items-center items-center"
      >
        <label class="font-bold text-slate-500 uppercase text-sm">
          gradable
        </label>
        <label class="font-bold text-slate-500 uppercase text-sm">
          points gained
        </label>
        <label class="font-bold text-slate-500 uppercase text-sm">
          points lost
        </label>
        <label class="font-bold text-slate-500 uppercase text-sm">
          max points
        </label>
        <input
          type="checkbox"
          v-model="course.gradable"
          class="drop-shadow-sm h-8 w-8 ml-1 bg-white rounded-md checked:bg-slate-100 checked:drop-shadow checked:border-2 checked:border-slate-600 checked:border-solid"
        />
        <input
          type="number"
          v-model="course.gainedpoints"
          class="p-2 h-8 w-full bg-slate-50 rounded-lg outline-0 border-white border-solid border-2 focus:bg-gradient-to-r focus:from-white focus:to-purple-50 focus:drop-shadow focus:drop-shadow-sm disabled:bg-gradient-to-r disabled:from-zinc-100 disabled:to-zinc-200 disabled:border-none"
        />
        <input
          type="number"
          v-model="course.lostpoints"
          class="p-2 h-8 w-full bg-slate-50 rounded-lg outline-0 border-white border-solid border-2 focus:bg-gradient-to-r focus:from-white focus:to-purple-50 focus:drop-shadow drop-shadow-sm disabled:drop-shadow-none disabled:bg-gradient-to-r disabled:from-zinc-100 disabled:to-zinc-200 disabled:border-none"
        />
        <input
          type="number"
          v-model="course.maxpoints"
          class="p-2 h-8 w-full bg-slate-50 rounded-lg outline-0 border-white border-solid border-2 focus:bg-gradient-to-r focus:from-white focus:to-purple-50 focus:drop-shadow drop-shadow-sm disabled:drop-shadow-none disabled:bg-gradient-to-r disabled:from-zinc-100 disabled:to-zinc-200 disabled:border-none"
        />
      </div>
      <form class="container flex-col flex align-start">
        <label
          class="pl-1 text-left font-bold text-slate-500 uppercase text-sm"
        >
          description
        </label>
        <textarea
          v-model="course.description"
          type="text"
          class="p-2 h-24 w-full bg-slate-50 rounded-lg outline-0 border-white border-solid border-2 focus:bg-gradient-to-r focus:from-white focus:to-slate-50 focus:drop-shadow drop-shadow-sm bg-gradient-to-r from-slate-50 to-zinc-50 text-alig"
        />
      </form>
      <!-- <div class="flex justify-center gap-5">
        <CheckIcon
          class="select-none h-16 w-16 hover:cursor-pointer active:cursor-grab active:scale-95"
          @click="commit"
        />
        <XIcon
          class="select-none h-16 w-16 hover:cursor-pointer active:cursor-grab active:scale-95"
          @click="deleteCourse"
        />
      </div> -->
      <div class="container flex justify-center content-center gap-8 mt-4">
        <button
          class="rounded-lg border-solid border-white border-2 drop-shadow h-8 w-32 bg-gradient-to-r from-slate-100 to-slate-50 hover:drop-shadow-md active:scale-95 uppercase font-black text-lg text-sky-900"
          @click="commit"
        >
          save
        </button>
        <button
          class="rounded-lg border-solid border-white border-2 drop-shadow h-8 w-32 bg-gradient-to-r from-red-400 to-red-500 hover:drop-shadow-md active:scale-95 uppercase font-black text-lg text-zinc-200 hover:shadow-lg hover:shadow-red-400"
          @click="deleteCourse"
        >
          delete
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, computed } from "vue";
import { CheckIcon, XIcon } from "@heroicons/vue/solid";
import store from "@/store";
import Course from "@/assets/types/Course";

function commit() {
  if (isNewCourse.value === true) {
    store.dispatch("saveNewCourse");
  } else {
    store.dispatch("saveCourseModification", course.value);
  }
  close();
}

function deleteCourse() {
  if (isNewCourse.value === false) {
    store.dispatch("deleteCourse", course.value.id);
  }
  close();
}

function close() {
  store.dispatch("discardCourseModification");
}

const isNewCourse = computed(() => {
  const course = store.getters.getActiveCourse;
  if (course != {}) {
    return false;
  }
  return true;
});

const course = computed(() => {
  const course = structuredClone(store.getters.getActiveCourse);
  if (course != {}) {
    return course;
  } else {
    return {
      id: "",
      name: "",
      description: "",
      maxpoints: "",
      gradable: false,
      gainedpoints: "",
      lostpoints: "",
    };
  }
});
</script>
<style lang="scss" scoped>
#popup-container {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  input[type="checkbox"] {
    -webkit-appearance: none;
  }
}
</style>
