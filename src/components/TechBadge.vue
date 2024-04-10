<template>
  <div class="img-container d-flex justify-content-center align-items-center rounded-1">
    <img :src="tech.picture" :alt="`Picture of ${tech.name}`" :title="`Click button to purchase ${tech.name} for ${tech.energyCost}`" class="badge-img img-fluid">
    <small v-if="tech.proficiency === 'Beginner'" class="card-title-green text-center text-uppercase fw-bold pt-2">{{ tech.name }}</small>
    <small v-if="tech.proficiency === 'Intermediate'" class="card-title-yellow text-center text-uppercase fw-bold pt-2">{{ tech.name }}</small>
    <small v-if="tech.proficiency === 'Advanced'" class="card-title-red text-center text-uppercase fw-bold pt-2">{{ tech.name }}</small>
  </div>
</template>

<script>
import { Stats } from "../models/Stats.js";
import { Tech } from "../models/Tech.js";

export default {
  props: {
    tech: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.img-container {
  position: relative;
  width: 2rem;
  height: 2rem;
  .card-title-green, .card-title-yellow, .card-title-red {
    position: absolute;
    width: 100%;
  }
  .card-title-green {
    color: #80f96d;
  }
  .card-title-yellow {
    color: #f9f96d;
  }
  .card-title-red {
    color: #f96d6d;
  }
}
</style>