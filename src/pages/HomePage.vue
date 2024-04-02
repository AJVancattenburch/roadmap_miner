<template>
  <div class="home d-flex">
    <i class="upgrade-btn mdi mdi-plus" type="button" data-bs-toggle="offcanvas" data-bs-target="#upgradeOffcanvas" aria-controls="upgradeOffcanvas">
      <span>Upgrades</span>
    </i>
    <UpgradeOffcanvas />
    <a class="btn btn-primary skill-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#skillOffcanvas" aria-controls="skillOffcanvas">
      Skills
    </a>
    <SkillOffcanvas />
  </div>
</template>

<script>
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { accountService } from "../services/AccountService.js";
import { gameService } from "../services/GameService.js";
import { AppState } from "../state/AppState.js";
import { computed, onMounted } from "vue";
import UpgradeOffcanvas from "../components/upgrades/UpgradeOffcanvas.vue";
import SkillOffcanvas from "../components/skills/SkillOffcanvas.vue";

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
      logger.log("Upgrade:", AppState.upgradeState)
    });
    return {
      getAccount,
      getUpgrades,
      upgrades: computed(() => AppState.upgradeState.upgrades),
    }
  },
  components: {
    UpgradeOffcanvas,
    SkillOffcanvas,
  }
}
</script>

<style scoped lang="scss">
.home {
  background: url('../assets/img/data_miner_background.png') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  .upgrade-btn {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    height: 3rem;
    width: 3rem;
    background: #111;
    border-radius: 50%;
    box-shadow: 0 0 0.5rem #444 inset;
    transition: 0.3s ease-in-out;
    &>span {
      position: absolute;
      top: 3rem;
    }
    &:hover {
      background: #333;
      transition: 0.3s ease-in-out;
    }
  }
  .skill-btn {
    position: absolute;
    top: 1rem;
    left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    height: 3rem;
    width: 3rem;
    background: #111;
    &:hover {
      background: #333;
    }
  }
}
</style>
