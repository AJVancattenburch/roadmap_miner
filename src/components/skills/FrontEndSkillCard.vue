<template>
  <div v-if="skill.category === 'Front End'" class="card d-flex flex-column justify-content-center align-items-center mb-2">
    <h6 class="card-title text-center pt-2"><span class="emphasize-title">Learn</span> {{ skill.name }}</h6>
    <div class="img-container d-flex justify-content-center align-items-center rounded-1">
      <img :src="skill.picture" :alt="`Picture of ${skill.name}`" :title="`Click button to purchase for ${skill.upgradeQuantityReq} ${skill.name} upgrades`" class="card-img-top img-fluid">
    </div>
    <small v-if="upgrade" class="sub-text">*{{skill.upgradeQuantityReq}} {{ skill.upgradeReq }} upgrades required*</small>
    <i class="mdi mdi-battery"> <span class="upgrade-requirements">{{ skill.upgradeQuantityReq }}</span></i>
  </div>
</template>

<script>
import { AppState } from "../../state/AppState.js";
import { skillState } from "../../state/scopedStates/SkillState.js";
import { computed, onMounted } from "vue";
import { Skill } from "../../models/Skill.js";
import { Upgrade } from "../../models/Upgrade.js";
import { logger } from "../../utils/Logger.js";
import Pop from "../../utils/Pop.js";
import { gameService } from "../../services/GameService.js";
import { upgradeSkillsService } from "../../services/UpgradeSkillsService.js";

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
    async function calculateSkillReqByUpgrade() {
      try {
        await upgradeSkillsService.calculateSkillReqByUpgrade()
        logger.log("Skills:", AppState.skillState.skills)
      }
      catch (error) {
        Pop.error(error);
        logger.error(error);
      }
    }
    onMounted(() => {
      calculateSkillReqByUpgrade()
    })
    return {
      // upgrade: computed(() => {
        // return AppState.upgradeState.upgrades.find(u => u.name.contains(props.skill.
      // })
    }
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
  font-style: italic;
}
</style>
