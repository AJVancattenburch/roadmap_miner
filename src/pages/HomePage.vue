<template>
  <div class="home d-flex">
    <i class="tech-btn mdi mdi-plus" type="button" data-bs-toggle="offcanvas" data-bs-target="#techOffcanvas" aria-controls="techOffcanvas">
      <span>Technologies</span>
    </i>
    <TechOffcanvas :position="position" :nameOf="nameOf" />

    <a class="btn btn-primary skill-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#skillOffcanvas" aria-controls="skillOffcanvas">
      Skills
    </a>
    <SkillOffcanvas :skill="skill" :position="position" :nameOf="nameOf" />

    <div class="col-12 clicker-container d-flex justify-content-center align-items-center">
      <h1 @click="knowledgeClicker" class="col-3 btn btn-outline-primary">Click and learn</h1>
      <p>Current Knowledge: {{ knowledgeCounter }}</p>
    </div>
  </div>
</template>

<script>
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { accountService } from "../services/AccountService.js";
import { gameService } from "../services/GameService.js";
import { AppState } from "../state/AppState.js";
import { ref, computed, onMounted } from "vue";
import TechOffcanvas from "../components/technologies/TechOffcanvas.vue";
import SkillOffcanvas from "../components/skills/SkillOffcanvas.vue";
import { skillState } from "../state/scopedStates/SkillState.js";

export default {
  setup() {
    const skill = ref(skillState.activeSkill)
    const position = ref('')
    const nameOf = ref('')

    async function getAccount() {
      try {
        await accountService.getAccount();
      }
      catch (error){
        logger.error(error);
        Pop.error(error);
      }
    }

    async function knowledgeClicker() {
      try {
        await gameService.knowledgeClicker();
        logger.log(`Knowledge: ${AppState.knowledge}`)
      } catch (error) {
        logger.error(error);
        Pop.error(error);
      }
    }

    async function getTechnologies() {
      try {
        await gameService.getTechnologies();
        logger.log(`Tech State: ${AppState.techState}`)
      } catch (error){
        logger.error(error);
        Pop.error(error);
      }
    }

    return {
      skill,
      position,
      nameOf,
      knowledgeClicker,
      getAccount,
      getTechnologies,
      knowledgeCounter: computed(() => AppState.knowledge),
    }
  },
  components: {
    TechOffcanvas,
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
  .clicker-container {
    margin-top: 18rem;
  }
  .tech-btn {
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
