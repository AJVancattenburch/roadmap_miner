<template>
  <div class="col-11 progress m-1 mb-2 bg-dark" style="outline: 1px ridge #000;">
    <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuemin="0" :aria-valuemax="maxProgress" :style="{ width: progressWidth }"></div>
    <span class="text-white" style="position: absolute; left: 50%; transform: translateX(-50%);">{{ progressWidth }}</span>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    progress: {
      type: Number,
      required: true
    },
    maxProgress: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const progressWidth = computed(() => {
      const percentage = ((props.progress / props.maxProgress) * 100).toFixed(2);
      return `${percentage}%`;
    });

    return {
      progressWidth
    };
  }
};
</script>

<style scoped lang="scss">
</style>