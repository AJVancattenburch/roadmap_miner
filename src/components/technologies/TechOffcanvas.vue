<template>
  <OffcanvasWrapper :position="'offcanvas-bottom'" :offcanvasInstance="'techOffcanvas'" :offcanvasHeader="'Technologies to Learn'">
    <template #body-slot>
      <div class="offcanvas-body">
        <h3 class="text-center mt-0">Front End Technologies</h3>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div v-for="tech in technologies" :key="tech.category">
            <TechCard v-if="tech.category === 'Front End'" :tech="tech" @start-learning="startLearning" class="mx-2" />
          </div>
        </div>
        <h3 class="text-center p-3">Back End Technologies</h3>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div v-for="tech in technologies" :key="tech.category">
            <TechCard v-if="tech.category === 'Back End'" :tech="tech" @start-learning="startLearning" class="mx-2" />
          </div>
        </div>
        <h3 class="text-center p-3">Full Stack Technologies</h3>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div v-for="tech in technologies" :key="tech.category">
            <TechCard v-if="tech.category === 'Full Stack'" :tech="tech" @start-learning="startLearning" class="mx-2" />
          </div>
        </div>
      </div>
    </template>
  </OffcanvasWrapper>
</template>

<script>
import { computed } from "vue";
import Pop from "../../utils/Pop.js";
import { logger } from "../../utils/Logger.js";
import TechCard from "./TechCard.vue";
import OffcanvasWrapper from '../../components/OffcanvasWrapper.vue'
import { techSkillsService } from "../../services/TechSkillsService.js";
import { techState } from "../../state/scopedStates/TechState.js";
import { Tech } from "../../models/Tech.js";
import { start } from "@popperjs/core/index.js";

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
  setup(props, { emit }) {

    

    async function startLearning() {
      try {
        const newTech = props.tech;
        await techSkillsService.startLearning(newTech);
        logger.log(`Began learning ${newTech}`);
        
      }
      catch (error){
        logger.error(error);
        Pop.error(error);
      }
    }

    return {
      startLearning,
      technologies: computed(() => techState.technologies),
    }
  },
  components: {
    OffcanvasWrapper,
    TechCard
  }
}
</script>