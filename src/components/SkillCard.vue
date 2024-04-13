<template>
  <div class="card d-flex justify-content-center align-items-center mx-1">
    <div class="img-container d-flex justify-content-center align-items-center">
      <img :src="skill.picture" :alt="`Picture of ${skill.name}`" :title="`Picture of the ${skill.name} skill`" class="card-img img-fluid">
    </div>
    <span class="col-12 card-title text-center sub-text"><span class="emphasize-title">{{ skill.name }}</span> Mastery</span>
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

    async function autoUnlockSkill() {
      try {
        const newSkill = props.skill
        await skillsService.autoUnlockSkill(newSkill)
      } catch (error) {
        Pop.error(error);
        logger.error(error);
      }
    }
    return {
      autoUnlockSkill
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  width: 185px;
  height: 100px;
  overflow: hidden;
  background: conic-gradient(var(--glass-plum), #7a7a7a 0.5turn, var(--glass-plum));
  border-radius: 0 0 2rem 2rem;
  .card-title {
    position: relative;
    top: 0.25rem;
    color: #fff;
    text-shadow: 0 0.5rem 0.5rem var(--blue);
    font-size: 1rem;
    font-weight: 700;
    z-index: 1;
  }
  .img-container {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    .card-img {
      position: absolute;
      top: -4rem;
      left: 50%;
      transform: translateX(-50%);
      width: 130px;
      height: 130px;
      aspect-ratio: 1 / 1;
      object-fit: 100%;
      border-radius: 50%;
      border-bottom-left-radius: 30%;
      border-bottom-right-radius: 30%;
      background: var(--glass-blue-linear-gradient);
      box-shadow: var(--btn-shadow-green);
    }
  }
  .mdi {
    color: green;
    .tech-requirements {
      color: var(--red);
      font-style: normal;
    }
  }
  .sub-text {
    font-size: 1rem;
    font-weight: 500;
    padding-bottom: 0;
  }
}
</style>