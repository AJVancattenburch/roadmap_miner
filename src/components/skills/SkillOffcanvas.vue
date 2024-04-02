<template>
  <OffcanvasWrapper :position="'offcanvas-start'" :nameOf="'skillOffcanvas'">
    <template #body-slot>
      <div class="offcanvas-body p-3">
        <h3 class="text-center pb-3">Skill Tree</h3>
        <h5 class="text-center">Front End Skills</h5>
        <div v-for="frontEnd in skills" :key="frontEnd.category">
          <FrontEndSkillCard :skill="frontEnd" class="mx-2" />
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
    async function getUpgrades() {
      try {
        await gameService.getUpgrades();
        logger.log(AppState.upgradeState)
      }
      catch (error){
        logger.error(error);
        Pop.error(error);
      }
    }

    onMounted(() => {
      logger.log("Skills:", AppState.skillState)
    });
    return {
      getUpgrades,
      skills: computed(() => AppState.skillState.skills),
    }
  },
  components: {
    OffcanvasWrapper,
    FrontEndSkillCard
  }
}
</script>