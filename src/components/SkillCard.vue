<template>
  <div class="card d-flex mx-1">
    <div class="img-container d-flex justify-content-center align-items-center">
      <img :src="skill.picture" :alt="`Picture of ${skill.name}`" :title="`Picture of the ${skill.name} skill`" :style="{ boxShadow: `0 0 0.5rem ${skill.fillSecondary}, 0 0 0.25rem 0.1rem ${skill.fillSecondary} inset` }" class="card-img img-fluid">
    </div>
    <span :style="{ color: skill.fillPrimary }" class="col-12 card-title d-flex flex-column text-center justify-content-center">{{ skill.name }}<span class="emphasis ps-1">Mastery</span></span>
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
  width: 175px;
  height: 135px;
  background: conic-gradient(var(--bg-dark-purple), var(--glass-plum) 0.5turn, var(--bg-dark-purple));
  border-radius: 0.5rem 1.5rem 1.5rem 0.5rem;
  overflow: hidden;
  filter: drop-shadow(2px 2px 3px var(--blue));
  .card-title {
    position: relative;
    top: 0.25rem;
    color: #ebebeb;
    text-shadow: 1px 1px 2px var(--plum);
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 1.1;
    padding-bottom: 0.25rem;
    z-index: 1;
  }
  .img-container {
    position: relative;
    width: 170px;
    height: 90px;
    transform: translateX(0.75rem);
    background: var(--glass-blue-linear-gradient);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0.5rem;
    .card-img {
      position: absolute;
      top: -3rem;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 130px;
      aspect-ratio: 1 / 1;
      object-fit: 100%;
      border-top-left-radius: 0;
      border-top-right-radius: 1.5rem;
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0%;
      //box-shadow: var(--btn-shadow-green);
    }
  }
  .mdi {
    color: green;
  }
  .emphasis {
    color: var(--red);
    font-style: normal;
    padding-right: 0.5rem;
  }
}
</style>