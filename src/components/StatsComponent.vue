<template>
  <div class="container inline-flex flex-col gap-2">
    <ProgressComponent
      gainedpoints="20"
      lostpoints="20"
      maxpoints="100"
      course="HCI"
    />
    <ProgressComponent
      gainedpoints="30"
      lostpoints="5"
      maxpoints="100"
      course="HCI"
    />
    <ProgressComponent
      gainedpoints="50"
      lostpoints="5"
      maxpoints="100"
      course="HCI"
    />
    <ProgressComponent
      gainedpoints="80"
      lostpoints="0"
      maxpoints="100"
      course="HCI"
    />
    <ProgressComponent
      gainedpoints="50"
      lostpoints="5"
      maxpoints="100"
      course="HCI"
    />
  </div>
</template>
<script lang="ts">
import ProgressComponent from "./ProgressComponent.vue";
export default { components: { ProgressComponent } };
</script>
