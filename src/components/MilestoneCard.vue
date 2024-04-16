<template>
  <div class="card d-flex flex-row justify-content-around align-items-center mt-4">
    <span :style="{ color: milestone.primaryColor, textShadow: `0 2px 2px ${milestone.complimentaryColor }` }" :title="`You are now a ${milestone.description}`" class="card-title">Current Rank: {{ milestone.name }}</span>
    <span class="badge bg-secondary text-wrap">Knowledge Multiplier: {{ milestone.multiplier }}</span>
  </div>
</template>
  
<script>
import Pop from "../utils/Pop.js"
import { logger } from "../utils/Logger.js"  
import { Milestone } from "../models/Milestone.js"
import { mileStonesService } from "../services/MilestonesService.js"

export default {
  props: {
    milestone: {
      type: Milestone,
      required: true
    }
  },
  setup(props) {

    async function setCurrentMilestone() {
      try {
        const newMilestone = props.milestone
        await mileStonesService.setCurrentMilestone(newMilestone)
      } catch (error) {
        Pop.error(error)
        logger.error(error)
      }
    }

    return {
      setCurrentMilestone,
    } 
  }
}
</script>

<style scoped lang="scss">
.card {
  width: 80%;
  height: 35px;
  background: none;
  white-space: nowrap;
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
}
</style>