<template>
  <div class="home d-flex">
    <div class="d-flex justify-content-end align-items-top" style="position: absolute; top: 1rem; right: 1rem;">
      <Login />
    </div>
    <section>
      <i class="tech-btn mdi mdi-plus" type="button" data-bs-toggle="offcanvas" data-bs-target="#techOffcanvas" aria-controls="techOffcanvas">
        <span>Technologies</span>
      </i>
      <TechsOffcanvas  :offcanvasInstance="offcanvasInstance" />

      <a class="btn btn-primary skill-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#skillOffcanvas" aria-controls="skillOffcanvas">
        <span>Skills</span>
      </a>
      <SkillsOffcanvas :offcanvasInstance="offcanvasInstance" />
    </section>

    <aside class="current-score text-white">
      <h6 class="col-12">🧠 Knowledge: {{ stats.knowledge }}</h6>
      <h6 class="col-12">⚡ Energy: {{ stats.energy }}</h6>

      <h6 class="col-12 pt-5 tech-title">📚 Learned Tech:</h6>
      <div class="col-12 d-flex justify-content-center align-items-center">
        <TechBadge v-for="myTech in stats.learnedTechnologies" :key="myTech.id" :tech="myTech" class="col-4" />
      </div>
      <h6 class="col-12 pt-3 skills-title">🎓 Earned Skills:</h6>
      <div class="col-12 d-flex flex-column justify-content-center align-items-center">
        <SkillCard v-for="mySkill in stats.skillsEarned" :key="mySkill.id" :skill="mySkill" />
      </div>
    </aside>

    <div class="col-12 clicker-container d-flex flex-column justify-content-center align-items-center">
      <h1 @click="knowledgeClicker" class="col-2 btn btn-outline-success fw-bold fst-italic">Click => learn</h1>
    </div>
  </div>
</template>

<script>
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { gameService } from "../services/GameService.js";
import { AppState } from "../state/AppState.js";
import { ref, computed, onMounted } from "vue";
import TechBadge from "../components/TechBadge.vue";
import SkillCard from "../components/SkillCard.vue";
import TechsOffcanvas from "../components/TechsOffcanvas.vue";
import SkillsOffcanvas from "../components/SkillsOffcanvas.vue";
import { skillState } from "../state/scopedStates/SkillState.js";
import { techState } from "../state/scopedStates/TechState.js";
import { statsState } from "../state/scopedStates/StatsState.js";

export default {
  setup() {
    const offcanvasInstance = ref('')
    const stats = computed(() => statsState)

    async function knowledgeClicker() {
      try {
        await gameService.knowledgeClicker();
        logger.log(`Knowledge: ${AppState.knowledge}`)
      } catch (error) {
        logger.error(error);
        Pop.error(error);
      }
    }

    return {
      knowledgeClicker,

      stats,
      offcanvasInstance,
      technologies: computed(() => techState.technologies),
      skills: computed(() => skillState.skills),
    }
  },
  components: {
    TechBadge,
    SkillCard,
    TechsOffcanvas,
    SkillsOffcanvas,
  }
}
</script>

<style scoped lang="scss">
.home {
  background: url('../assets/img/data_miner_background.png') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  .current-score {
    position: absolute;
    top: 9rem;
    right: 0;
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    height: 35rem;
    width: 15rem;
    background: linear-gradient(270deg, #000, #111 85%, transparent);
    border-radius: 0 0 0 1rem;
    transition: 0.3s ease-in-out;
    &>h6 {
      font-size: 1rem;
      font-weight: bold;
      text-shadow: 0 1px 2px #3546b5;
    }
  }
  .clicker-container {
    margin-top: 18rem;
  }
  .tech-btn, .skill-btn {
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