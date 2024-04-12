<template>
  <div v-if="skill.isUnlocked" class="col-12 card d-flex flex-row justify-content-center align-items-center">
    <div class="col-4 img-container d-flex justify-content-center align-items-center">
      <img :src="skill.picture" :alt="`Picture of ${skill.picture} Mastery Badge`" :class="`${nameSlug}-img img-fluid`">
    </div>
    <div class="col-8 info-container d-flex flex-column justify-content-center align-items-center">
      <small class="card-title green d-flex flex-column fw-bold">{{ skill.name }} Mastery</small>
      <small class="card-text">{{ skill.description }}</small>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { slugKebab } from "../utils/SlugKebab.js";

export default {
  props: {
    skill: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const nameSlug = computed(() => {
      return slugKebab(props.skill.name)
    })
    return {
      nameSlug
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 3.5rem;
  overflow: hidden;
  .img-fluid {
    width: 100%;
    height: 3.5rem;
    background: var(--blue-radial-gradient);
    padding: 0.25rem;
  }
  .info-container {
    position: relative;
    top: 0;
    .card-title, .card-text {
      position: absolute;
      font-size: 0.75rem;
    }
    .card-title {
      top: 0;
    }
    .card-text {
      top: 1.25rem;
      left: 0.25rem;
      line-height: 0.75rem;
    }
  }
}
</style>