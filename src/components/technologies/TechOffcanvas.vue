<template>
  <OffcanvasWrapper :position="'offcanvas-bottom'" :offcanvasInstance="'techOffcanvas'" :offcanvasHeader="'Technologies to Learn'">
    <template #body-slot>
      <div class="offcanvas-body">
        <h3 class="text-center mt-0">Front End Technologies</h3>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div v-for="tech in technologies" :key="tech.category">
            <TechCard v-if="tech.category === 'Front End'" :tech="tech" class="mx-2" />
          </div>
        </div>
        <h3 class="text-center p-3">Back End Technologies</h3>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div v-for="tech in technologies" :key="tech.category">
            <TechCard v-if="tech.category === 'Back End'" :tech="tech" class="mx-2" />
          </div>
        </div>
        <h3 class="text-center p-3">Full Stack Technologies</h3>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div v-for="tech in technologies" :key="tech.category">
            <TechCard v-if="tech.category === 'Full Stack'" :tech="tech" class="mx-2" />
          </div>
        </div>
      </div>
    </template>
  </OffcanvasWrapper>
</template>

<script>
import { computed } from "vue";
import TechCard from "./TechCard.vue";
import OffcanvasWrapper from '../../components/OffcanvasWrapper.vue'
import { techState } from "../../state/scopedStates/TechState.js";
import { Tech } from "../../models/Tech.js";

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