<template>
  <div id="flag">
    <h1 class="text-gray-200 font-bold mt-2 ml-4">{{ props.text }}</h1>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      class="h-12 w-12"
    >
      <path
        fillRule="evenodd"
        d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
        clipRule="evenodd"
      />
    </svg>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  text: String,
});
</script>
<style lang="scss" scoped>
#flag {
  position: relative;
  h1 {
    position: absolute;
  }
}
</style>
