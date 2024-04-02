<template>
  <div class="home d-flex">
    <a class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#statsOffcanvas" aria-controls="statsOffcanvas">
      Stats
    </a>
    <StatsOffcanvas />
  </div>
</template>

<script>
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import StatsOffcanvas from '../components/StatsOffcanvas.vue'
import { accountService } from "../services/AccountService.js";
import { gameService } from "../services/GameService.js";
import { AppState } from "../state/AppState.js";
import { computed, onMounted } from "vue";
export default {
  setup() {

    async function getAccount() {
      try {
        await accountService.getAccount();
      }
      catch (error){
        logger.error(error);
        Pop.error(error);
      }
    }

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

    async function getStats() {
      try {
        const accountId = AppState.account.id;
        await accountService.getStats(accountId);
      }
      catch (error){
        logger.error(error);
        Pop.error(error);
      }
    }

    onMounted(() => {
      logger.log("Upgrades:", AppState.upgradeState)
    });
    return {
      getAccount,
      getUpgrades,
      upgrades: computed(() => AppState.upgradeState),
    }
  },
  components: {
    StatsOffcanvas,
  }
}
</script>

<style scoped lang="scss">
.home {
  background: url('../assets/img/data_miner_background.png') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    height: 3rem;
    width: 3rem;
    background: transparent;
  }
}
</style>
