<template>
  <div class="col-12 d-flex">
    <div v-if="tech.quantity === 0" class="col-4 d-flex badge-container beginner d-flex flex-column justify-content-center align-items-center">
      <img :src="tech.picture" :alt="`Picture of ${tech.name}`" title="Proficiency Level: Beginner" class="badge-img img-fluid">
      <small class="card-title green d-flex flex-column fw-bold pt-2">{{ tech.name }}<span class="proficiency">I</span></small>
    </div>
    <div v-if="tech.quantity === 1" class="col-4 d-flex badge-container intermediate d-flex flex-column justify-content-center align-items-center">
      <img :src="tech.picture" :alt="`Picture of ${tech.name}`" title="Proficiency Level: Intermediate" class="badge-img img-fluid">
      <small class="card-title yellow d-flex flex-column fw-bold pt-2">{{ tech.name }}<span class="proficiency">II</span></small>
    </div>
    <div v-if="tech.quantity === 2" class="col-4 d-flex badge-container advanced d-flex flex-column justify-content-center align-items-center">
      <img :src="tech.picture" :alt="`Picture of ${tech.name}`" title="Proficiency Level: Advanced" class="badge-img img-fluid">
      <small class="card-title red d-flex flex-column fw-bold pt-2">{{ tech.name }}<span class="proficiency">III</span></small>
    </div>
  </div>
    <!-- <div v-for="(quantity, index) in tech.quantity" :key="index" :class="`badge-container `" class="advanced d-flex flex-column justify-content-center align-items-center">
      <img :src="techBadge.picture" :alt="`Picture of ${techBadge.name}`" title="Proficiency Level: Advanced" class="badge-img img-fluid">
      <small class="card-title red d-flex flex-column fw-bold pt-2">{{ techBadge.name }}<span class="proficiency">III</span></small>
    </div> -->
  
</template>

<script>
import { computed } from "vue";
import { statsState } from "../state/scopedStates/StatsState.js";


export default {
  props: {
    tech: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      // techBadge: computed(() => {
      //   const badge = statsState.learnedTechnologies.find(tech => tech.name === tech.name)
      //   return badge
      // })
    }
  }
}
</script>

<style scoped lang="scss">
* {
  text-align: center;
  text-transform: uppercase;
}
.badge-container {
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 30%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  &.beginner {
    box-shadow: 0 0 0.5rem #80f96d, 0 0 0.1rem #80f96d inset;
  }
  &.intermediate {
    box-shadow: 0 0 0.5rem #f9f96d, 0 0 0.1rem #80f96d inset;
  }
  &.advanced {
    box-shadow: 0 0 0.5rem #f96d6d, 0 0 0.1rem #80f96d inset;
  }
  .card-title:is(.green, .yellow, .red) {
    position: absolute;
    font-size: 0.65rem;
    -webkit-text-stroke: 0.75px #000;
    &.green {
      color: #80f96d;
    }
    &.yellow {
      color: #f9f96d;
    }
    &.red {
      color: #f96d6d;
    }
    span {
      position: relative;
      bottom: 0.25rem;
    }
  }
}
</style>