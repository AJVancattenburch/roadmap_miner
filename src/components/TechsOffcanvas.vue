<template>
  <OffcanvasWrapper :position="'offcanvas-bottom'" :offcanvasInstance="'techsOffcanvas'" :offcanvasHeader="'Technologies to Learn'">
    <template #body-slot>
      <div class="offcanvas-body d-flex justify-content-evenly">
        <h5 class="front-end-header pb-3">Front End Technologies</h5>
        <div class="front-end-body d-flex justify-content-evenly align-items-center">
          <div v-for="tech in technologies" :key="tech.category">
            <TechCard v-if="tech.category === 'Front End'" :tech="tech" />
          </div>
        </div>
        <h5 class="back-end-header ms-5 mt-3 p-3">Back End Technologies</h5>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div v-for="tech in technologies" :key="tech.category">
            <TechCard v-if="tech.category === 'Back End'" :tech="tech" />
          </div>
        </div>
        <h5 class="full-stack-header mb-4 mt-3 p-3">Full Stack Technologies</h5>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div v-for="tech in technologies" :key="tech.category">
            <TechCard v-if="tech.category === 'Full Stack'" :tech="tech" />
          </div>
        </div>
      </div>
    </template>
  </OffcanvasWrapper>
</template>

<script>
import { computed } from "vue";
import TechCard from "./TechCard.vue";
import OffcanvasWrapper from '../components/OffcanvasWrapper.vue'
import { techState } from "../state/scopedStates/TechState.js";
import { Tech } from "../models/Tech.js";

export default {
  props: {
    position: {
      type: String,
    },
    offcanvasInstance: {
      type: String,
      required: true
    }
  },
  setup() {
    return {
      technologies: computed(() => techState.technologies),
    }
  },
  components: {
    OffcanvasWrapper,
    TechCard
  }
}
</script>

<style scoped lang="scss">
.offcanvas-body {
  display: flex;
  flex-direction: column;
  align-items: top;
  overflow-x: hidden;
}
.front-end-header {
  position: relative;
  top: -1rem;
}
.front-end-header, .back-end-header, .full-stack-header {
  padding-left: 5.5rem;
}
.front-end-body {
  width: 150%;
}
</style>