<template>
  <div v-if="skill.category === 'Front End'" class="card d-flex flex-column justify-content-center align-items-center mb-2">
    <h6 class="card-title text-center pt-2"><span class="emphasize-title">Learn</span> {{ skill.name }}</h6>
    <div class="img-container d-flex justify-content-center align-items-center rounded-1">
      <img :src="skill.picture" :alt="`Picture of ${skill.name}`" :title="`Click button to purchase for ${skill.upgradeQuantityReq} ${skill.name} upgrades`" class="card-img-top img-fluid">
    </div>
    <small class="sub-text">*{{skill.upgradeQuantityReq}} {{ skill.name }} upgrades required*</small>
    <i class="mdi mdi-battery"> <span class="upgrade-requirements">{{ skill.upgradeQuantityReq }}</span></i>
  </div>
</template>

<script>
import { Skill } from "../../models/Skill.js";

export default {
  props: {
    skill: {
      type: Skill,
      required: true
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
