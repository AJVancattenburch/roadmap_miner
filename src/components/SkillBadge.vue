<template>
  <div v-if="skill.isUnlocked" class="flex-row card d-flex justify-content-center align-items-center mb-1">
    <div class="col-3 img-container d-flex me-1">
      <img :src="skill.picture" :alt="`Picture of ${skill.picture} Mastery Badge`" :class="`${nameSlug}-img img-fluid`">
    </div>
    <div class="col-9 info-container d-flex flex-column justify-content-center px-1">
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
  height: 4rem;
  background: var(--glass-red-linear-gradient);
  border-image: var(--glass-blue-linear-gradient);
  border-image-slice: 1;
  overflow: hidden;
  border-radius: 0;
  .img-fluid {
    width: 100%;
    background: var(--blue-radial-gradient);
    padding-block: 0.25rem;
    clip-path: polygon(0 0, 100% 0, 87% 100%, 0 100%);
  }
  .info-container {
    position: relative;
    top: 0;
    .card-title, .card-text {
      text-shadow: 0 1px 2px #000;
      font-size: 0.75rem;
      line-height: 0.75rem;
    }
    .card-title {
      color: var(--blue);
      margin-block: 0.25rem;
      line-height: 0.75rem;
      justify-content: flex-start;
    }
    .card-text {
      color: #fafafa;
      margin-bottom: 0.5rem;
      line-height: 0.75rem;
    }
  }
}
</style>