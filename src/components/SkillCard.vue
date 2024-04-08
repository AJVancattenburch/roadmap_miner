<template>
  <div class="card d-flex flex-column justify-content-center align-items-center mb-2">
    <h6 class="card-title text-center pt-2"><span class="emphasize-title">Learn</span> {{ skill.name }}</h6>
    <div class="img-container d-flex justify-content-center align-items-center rounded-1">
      <img :src="skill.picture" :alt="`Picture of ${skill.name}`" :title="`Unlocks after completing the ${skill.requirementCount} affiliated technologies`" class="card-img-top img-fluid">
    </div>
    <small class="col-12 sub-text d-flex flex-column flex-start">
      <div class="emphasize-text">* Must know {{skill.requirementCount}} required technologies</div>
      <span>{{ skill.requiredTech }}</span>
    </small>
    <i class="mdi mdi-battery"> <span class="tech-requirements">{{ skill.requirementCount }}</span></i>
  </div>
</template>

<script>
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { Skill } from "../models/Skill.js";
import { skillsService } from "../services/SkillsService.js";

export default {
  props: {
    skill: {
      type: Skill,
      required: true
    },
  },
  setup(props) {

    async function unlockSkill() {
      try {
        const newSkill = props.skill
        await skillsService.unlockSkill(newSkill)
      } catch (error) {
        Pop.error(error);
        logger.error(error);
      }
    }
    return {
      unlockSkill
    }
  }
}
</script>

<style scoped lang="scss">
.mdi {
  color: green;
  .tech-requirements {
    color: red;
    font-style: normal;
  }
}
.sub-text {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 1rem;
  .emphasize-text {
    font-weight: 700;
  }
}
</style>