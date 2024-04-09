<template>
  <div class="img-container d-flex justify-content-center align-items-center bg-dark rounded-1">
    <img :src="tech.picture" :alt="`Picture of ${tech.name}`" :title="`Click button to purchase ${tech.name} for ${tech.energyCost}`" class="card-img-top img-fluid">
    <h6 class="card-title text-center text-uppercase pt-2">{{ tech.name }}</h6>
  </div>
</template>

<script>
import { Tech } from "../models/Tech.js";

export default {
  props: {
    tech: {
      type: Tech,
      required: true
    }
  }
}
</script>