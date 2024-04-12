<template>
  <div v-if="skill.isUnlocked" class="flex-row card d-flex justify-content-center align-items-center">
    <div class="col-4 img-container d-flex">
      <img :src="skill.picture" :alt="`Picture of ${skill.picture} Mastery Badge`" :class="`${nameSlug}-img img-fluid`">
    </div>
    <div class="col-8 info-container d-flex flex-column align-items-center">
      <small class="card-title green fw-bold">{{ skill.name }} Mastery</small>
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
    width: 75%;
    height: 80%;
    background: var(--blue-radial-gradient);
    padding-block: 0.25rem;
  }
  .info-container {
    position: relative;
    top: 0;
    left: -15px;
    .card-title, .card-text {
      font-size: 0.75rem;
      line-height: 0.75rem;
    }
    .card-title {
      margin-top: 0.5rem;
      line-height: 0.75rem;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .card-text {
      margin-bottom: 0.5rem;
      line-height: 0.75rem;
    }
  }
}
</style>