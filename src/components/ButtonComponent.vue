<template>
  <button
    class="rounded-lg border-solid border-white border-2 drop-shadow bg-gradient-to-r hover:drop-shadow-md active:scale-95 uppercase font-black text-lg text-sky-900 p-1 px-2"
    :class="[
      props.active
        ? 'from-slate-200 to-slate-100 ring-slate-300 ring-2'
        : 'from-slate-100 to-slate-50',
    ]"
  >
    {{ props.label }}
  </button>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  label: { type: String, required: true },
  active: Boolean,
});
</script>
