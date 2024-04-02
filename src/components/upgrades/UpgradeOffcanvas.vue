<template>
  <OffcanvasWrapper :position="'offcanvas-bottom'" :nameOf="'upgradeOffcanvas'">
    <template #body-slot>
      <div class="offcanvas-body p-3">
        <h3 class="text-center">Front End Upgrades</h3>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div v-for="frontEnd in upgrades" :key="frontEnd.category">
            <FrontEndUpgradeCard :upgrade="frontEnd" class="mx-2" />
          </div>
        </div>
        <h3 class="text-center p-3">Back End Upgrades</h3>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div v-for="backEnd in upgrades" :key="backEnd.category">
            <BackEndUpgradeCard :upgrade="backEnd" class="mx-2" />
          </div>
        </div>
        <h3 class="text-center p-3">Full Stack Upgrades</h3>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div v-for="fullStack in upgrades" :key="fullStack.category">
            <FullStackUpgradeCard :upgrade="fullStack" class="mx-2" />
          </div>
        </div>
      </div>
    </template>
  </OffcanvasWrapper>
</template>

<script>
import Pop from "../../utils/Pop.js";
import { logger } from "../../utils/Logger.js";
import OffcanvasWrapper from '../../components/OffcanvasWrapper.vue'
import { gameService } from "../../services/GameService.js";
import { AppState } from "../../state/AppState.js";
import { ref, computed, onMounted } from "vue";
import FrontEndUpgradeCard from "../../components/upgrades/FrontEndUpgradeCard.vue";
import BackEndUpgradeCard from "../../components/upgrades/BackEndUpgradeCard.vue";
import FullStackUpgradeCard from "../../components/upgrades/FullStackUpgradeCard.vue";

export default {
  props: {
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
      logger.log("Upgrade:", AppState.upgradeState)
    });
    return {
      getUpgrades,
      upgrades: computed(() => AppState.upgradeState.upgrades),
    }
  },
  components: {
    OffcanvasWrapper,
    FrontEndUpgradeCard,
    BackEndUpgradeCard,
    FullStackUpgradeCard,
  }
}
</script>