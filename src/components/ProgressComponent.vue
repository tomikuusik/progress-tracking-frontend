<template>
  <div
    class="container inline-flex flex-col shadow-md p-1 rounded-lg bg-slate-50 opacity-90 hover:opacity-100 hover:shadow-lg border border-gray-100"
  >
    <div class="mb-1 text-sm font-bold">
      {{ course }}: [ progression: {{ getProgressPercentage }}, lost
      progression: {{ getLostProgressPercentage }}, maximum attainable:
      {{ getMaxAttainable }} ]
    </div>
    <div class="inline-flex w-full bg-gray-200 rounded-full h-2.5">
      <div
        class="progression-bar h-2.5 rounded-bl-full rounded-tl-full"
        :class="hasRoundedCorners"
      ></div>
      <div
        class="lost-progression-bar h-2.5 rounded-br-full rounded-tr-full bg-gray-300"
      ></div>
      <div class="max-attainable-ticker bg-gray-400 w-1"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    course: {
      type: String,
      required: true,
    },
    maxpoints: {
      type: Number,
      required: true,
    },
    gainedpoints: {
      type: Number,
      required: true,
    },
    lostpoints: {
      type: Number,
      required: true,
    },
  },
  computed: {
    getProgress() {
      return (this.gainedpoints / this.maxpoints) * 100;
    },
    getLostProgressPercentage() {
      return (this.lostpoints / this.maxpoints) * 100 + "%";
    },
    getMaxAttainable() {
      return ((this.maxpoints - this.lostpoints) / this.maxpoints) * 100 + "%";
    },
    getBackgroundColor() {
      if (this.getProgress < 50) {
        return "red";
      } else if (this.getProgress < 75) {
        return "yellow";
      }
      return "green";
    },
    getProgressPercentage() {
      return this.getProgress + "%";
    },
    hasRoundedCorners() {
      if (this.lostpoints == 0) {
        return "rounded-full";
      }
      return "";
    },
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
.container {
  position: relative;
}

.progression-bar {
  background-color: v-bind(getBackgroundColor);
  width: v-bind(getProgressPercentage);
}

.lost-progression-bar {
  width: v-bind(getLostProgressPercentage);
}

.max-attainable-ticker {
  position: absolute;
  height: inherit;
  left: v-bind(getMaxAttainable);
}
</style>
