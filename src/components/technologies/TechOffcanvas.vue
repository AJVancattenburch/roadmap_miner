<template>
  <OffcanvasWrapper :position="'offcanvas-bottom'" :offcanvasInstance="'techOffcanvas'" :offcanvasHeader="'Technologies to Learn'">
    <template #body-slot>
      <div class="offcanvas-body p-3">
        <h3 class="text-center">Front End Technologies</h3>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div v-for="frontEnd in technologies" :key="frontEnd.category">
            <FrontEndTechCard :tech="frontEnd" class="mx-2" />
          </div>
        </div>
        <h3 class="text-center p-3">Back End Technologies</h3>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div v-for="backEnd in technologies" :key="backEnd.category">
            <BackEndTechCard :tech="backEnd" class="mx-2" />
          </div>
        </div>
        <h3 class="text-center p-3">Full Stack Technologies</h3>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div v-for="fullStack in technologies" :key="fullStack.category">
            <FullStackTechCard :tech="fullStack" class="mx-2" />
          </div>
        </div>
      </div>
    </template>
  </OffcanvasWrapper>
</template>

<script>
import { computed, ref } from "vue";
import Pop from "../../utils/Pop.js";
import { logger } from "../../utils/Logger.js";
import { AppState } from "../../state/AppState.js";
import FrontEndTechCard from "./FrontEndTechCard.vue";
import BackEndTechCard from "./BackEndTechCard.vue";
import FullStackTechCard from "./FullStackTechCard.vue";
import OffcanvasWrapper from '../../components/OffcanvasWrapper.vue'
import { techSkillsService } from "../../services/TechSkillsService.js";
import { techState } from "../../state/scopedStates/TechState.js";
import { Tech } from "../../models/Tech.js";

export default {
  props: {
    tech: {
      type: Tech,
      required: true
    },
    position: {
      type: String,
    },
    offcanvasInstance: {
      type: String,
      required: true
    }
  },
  setup(props) {

    async function learnTechnology() {
      try {
        await techSkillsService.learnTechnology(props.tech.id);
        logger.log(`Tech State: ${AppState.techState}`)
      }
      catch (error){
        logger.error(error);
        Pop.error(error);
      }
    }
    return {
      learnTechnology,
      technologies: computed(() => AppState.techState.technologies),
    }
  },
  components: {
    OffcanvasWrapper,
    FrontEndTechCard,
    BackEndTechCard,
    FullStackTechCard,
  }
}
</script>