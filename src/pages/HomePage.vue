<template>
  <div class="home d-flex">
    <section class="game-progress-container col-12 flex-row d-flex justify-content-center align-items-top pt-2">
      <div class="col-9 d-flex justify-content-end">
        <MilestoneCard v-if="milestone" :milestone="milestone" />
      </div>
      <div class="col-2 d-flex justify-content-end pt-3">
        <Login />
      </div>
    </section>
    <section class="tech-skill-container">
      <i class="tech-btn mdi mdi-plus fs-4 fst-normal" type="button" data-bs-toggle="offcanvas" data-bs-target="#techsOffcanvas" aria-controls="techsOffcanvas">
        <span class="header">Technologies</span>
      </i>
      <TechsOffcanvas  :offcanvasInstance="offcanvasInstance" />

      <i class="skill-btn mdi mdi-human-male-board fs-5 fst-normal" type="button" data-bs-toggle="offcanvas" data-bs-target="#skillsOffcanvas" aria-controls="skillsOffcanvas">
        <span class="header">Skills</span>
      </i>
      <SkillsOffcanvas :offcanvasInstance="offcanvasInstance" />
    </section>

    <section class="col-12 clicker-container d-flex flex-column justify-content-center align-items-center">
      <h1 @click="knowledgeClicker" class="col-2 knowledge-clicker btn btn-outline-success fw-bold fst-italic">Click => learn</h1>
    </section>
    
    <section class="col=12">
      <aside class="col-4 current-score text-white">
        <h6 class="col-12">🧠 Knowledge: {{ knowledge }}</h6>
        <h6 class="col-12 pb-4">⚡ Energy: {{ energy }}</h6>
        <h6 class="pt-4 tech-title">📚 Learned Tech:</h6>
        <div class="d-flex">
          <div v-for="(learnedTech, index) in stats.learnedTechnologies" :key="index" class="col-2 d-flex justify-content-center align-items-center">
            <TechBadge :tech="learnedTech" />
          </div>
        </div>
        <h6 class="pt-3 skills-title">🎓 Earned Skills:</h6>
        <div class="scroll-box">
          <div v-for="(earnedSkill, index) in stats.skillsEarned" :key="index" class="d-flex justify-content-center align-items-center">
            <SkillBadge :skill="earnedSkill" />
          </div>
        </div>
      </aside>
    </section>

  </div>
</template>

<script>
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { gameService } from "../services/GameService.js";
import { AppState } from "../state/AppState.js";
import { ref, computed } from "vue";
import MilestoneCard from "../components/MilestoneCard.vue";
import TechBadge from "../components/TechBadge.vue";
import SkillBadge from "../components/SkillBadge.vue";
import TechsOffcanvas from "../components/TechsOffcanvas.vue";
import SkillsOffcanvas from "../components/SkillsOffcanvas.vue";
import { skillState } from "../state/scopedStates/SkillState.js";
import { techState } from "../state/scopedStates/TechState.js";
import { statsState } from "../state/scopedStates/StatsState.js";
import { milestoneState } from "../state/scopedStates/MilestoneState.js";
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
      knowledge: computed(() => AppState.knowledge),
      energy: computed(() => AppState.energy),
      technologies: computed(() => techState.technologies),
      skills: computed(() => skillState.skills),
      milestone: computed(() => milestoneState.activeMilestone)
    }
  },
  components: {
    TechBadge,
    SkillBadge,
    TechsOffcanvas,
    SkillsOffcanvas,
    MilestoneCard
  }
}
</script>

<style scoped lang="scss">
.home {
  background: url('../assets/img/data_miner_background.png') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  .header {
    font-size: 1rem;
    font-weight: 500;
    text-shadow: 0 1px 2px var(--blue);
  }
  .clicker-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .knowledge-clicker {
      background: var(--glass-green-linear-gradient) !important;
      color: #ebebeb;
      &:hover {
        background: var(--glass-green-linear-gradient) var(--glass-orange)!important;
        color: #ebebeb;
        transition: all 0.3s ease-in-out;
      }
      &:active {
        filter: brightness(0.9);
      }
    }
  }
  .current-score {
    position: absolute;
    top: 9rem;
    right: 0;
    color: #ebebeb;
    display: flex;
    flex-direction: column;
    padding: 2rem 0.5rem 2rem 2rem;
    height: auto;
    width: 18rem;
    background: linear-gradient(270deg, #000, #111 90%, transparent);
    border-radius: 0 0 0 1rem;
    transition: 0.3s ease-in-out;
    &>h6 {
      font-size: 1rem;
      font-weight: bold;
      text-shadow: 0 1px 2px var(--blue);
    }
    .scroll-box {
      overflow-y: auto;
      height: auto;
      max-height: 10rem;
      margin-block: 0.25rem;
      background: var(--glass-blue-linear-gradient);
    }
  }
  //.clicker-container {
  //  margin-top: 18rem;
  //}
  .tech-btn, .skill-btn {
    position: absolute;
    bottom: 1rem;
    left: 1.5rem;
    color: #ebebeb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
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
    top: 0;
  }
}
</style>