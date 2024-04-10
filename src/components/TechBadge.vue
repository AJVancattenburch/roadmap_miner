<template>
  <div class="img-container d-flex justify-content-center align-items-center bg-dark rounded-1">
    <img :src="techStat.picture" :alt="`Picture of ${techStat.name}`" :title="`Click button to purchase ${techStat.name} for ${techStat.energyCost}`" class="card-img-top img-fluid">
    <h6 class="card-title text-center text-uppercase pt-2">{{ techStat.name }}</h6>
  </div>
</template>

<script>
import { Stats } from "../models/Stats.js";
import { statsState } from "../state/scopedStates/StatsState.js";
import { computed } from "vue";

export default {
  props: {
    tech: {
      type: Stats,
      required: true
    }
  },
  setup() {
    return {
      techStat: computed(() => {
        const learnedTechnologies = statsState.learnedTechnologies.map(techData => new Tech(techData));
        return learnedTechnologies;
      })
    }
  }
}
</script>