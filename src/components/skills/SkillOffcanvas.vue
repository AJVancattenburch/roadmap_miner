<template>
  <OffcanvasWrapper :position="'offcanvas-start'" :nameOf="'skillOffcanvas'">
    <template #body-slot>
      <div class="offcanvas-body p-3">
        <h3 class="text-center mt-3">Skill Tree</h3>
        <h5 class="text-center">Front End Skills</h5>
        <div v-for="frontEnd in skills" :key="frontEnd.category">
          <FrontEndSkillCard :skill="frontEnd" class="mx-2 mb-3" />
        </div>
        <hr />
        <h5 class="text-center mt-3">Back End Skills</h5>
        <div v-for="backEnd in skills" :key="backEnd.category">
          <BackEndSkillCard :skill="backEnd" />
        </div>
        <hr />
        <h5 class="text-center mt-3">Full Stack Skills</h5>
        <div v-for="fullStack in skills" :key="fullStack.category">
          <FullStackSkillCard :skill="fullStack" class="mx-2" />
        </div>
      </div>
    </template>
  </OffcanvasWrapper>
</template>

<script>
import Pop from "../../utils/Pop.js";
import { logger } from "../../utils/Logger.js";
import OffcanvasWrapper from '../OffcanvasWrapper.vue'
import FrontEndSkillCard from "./FrontEndSkillCard.vue";
import { gameService } from "../../services/GameService.js";
import { AppState } from "../../state/AppState.js";
import { computed, onMounted } from "vue";
import { Skill } from "../../models/Skill.js";

export default {
  props: {
    skill: {
      type: Skill,
      required: true
    },
    position: {
      type: String,
    },
    nameOf: {
      type: String,
      required: true
    }
  },
  setup() {
    return {
      skills: computed(() => AppState.skillState.skills),
    }
  },
  components: {
    OffcanvasWrapper,
    FrontEndSkillCard
  }
}
</script>