<template>
  <OffcanvasWrapper :position="'offcanvas-start'" :nameOf="'skillMenu'">
    <template #body-slot>
      <div class="offcanvas-body p-3">
        <h3 class="text-center">Skill Tree</h3>
        
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
  }
}
</script>