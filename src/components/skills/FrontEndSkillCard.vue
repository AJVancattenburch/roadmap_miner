<template>
  <div v-if="skill.category === 'Front End'" class="card d-flex flex-column justify-content-center align-items-center mb-2">
    <h6 class="card-title text-center pt-2"><span class="emphasize-title">Learn</span> {{ skill.name }}</h6>
    <div class="img-container d-flex justify-content-center align-items-center rounded-1">
      <img :src="skill.picture" :alt="`Picture of ${skill.name}`" :title="`Unlocks after completing the ${skill.requirementCount} affiliated upgrades`" class="card-img-top img-fluid">
    </div>
    <small class="col-12 sub-text d-flex flex-column flex-start">
      <div class="emphasize-text">* {{skill.requirementCount}} upgrades required:</div>
      <span>{{ skill.requiredUpgrades }}</span>
    </small>
    <i class="mdi mdi-battery"> <span class="upgrade-requirements">{{ skill.requirementCount }}</span></i>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { Skill } from "../../models/Skill.js";
import { Upgrade } from "../../models/Upgrade.js";
import { upgradeSkillsService } from "../../services/UpgradeSkillsService.js";
import { logger } from "../../utils/Logger.js";
import Pop from "../../utils/Pop.js";

export default {
  props: {
    skill: {
      type: Skill,
      required: true
    },
    upgrade: {
      type: Upgrade,
      required: false
    }
  },
  setup(props) {

    async function setUpgradesRequiredForSkill() {
      try {
        await upgradeSkillsService.setUpgradesRequiredForSkill(props.skill)
        } catch (error) {
        Pop.error(error);
        logger.error(error);
      }
    }
    onMounted(() => {
      setUpgradesRequiredForSkill()
    })
  }
}
</script>

<style scoped lang="scss">
.mdi {
  color: green;
  .upgrade-requirements {
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