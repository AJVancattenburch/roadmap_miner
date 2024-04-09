<template>
  <div class="card d-flex flex-column justify-content-center align-items-center">
    <div class="img-container d-flex justify-content-center align-items-center bg-dark rounded-1">
      <img :src="tech.picture" :alt="`Picture of ${tech.name}`" :title="`Click button to purchase ${tech.name} for ${tech.energyCost}`" class="card-img-top img-fluid">
    </div>
    <TechButton :tech="tech" :techProgress="techProgress" @learn-technology="learnTechnology" />
    <h6 class="card-title text-center pt-2"><span class="emphasize-title text-uppercase">Learn</span> {{ tech.name }}</h6>
    <div class="col-12 d-flex justify-content-center align-items-center">
      <ProgressBar :progress="techProgress" :maxProgress="techThreshold" />
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { techsService } from "../services/TechsService.js";
import TechButton from "./TechButton.vue";
import { Tech } from "../models/Tech.js";
import ProgressBar from "./ProgressBar.vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    tech: {
      type: Tech,
      required: true
    }
  },
  setup(props) {
    const techThreshold = computed(() => {
      return props.tech.energyCost;
    })
    const techProgress = ref(0);
    let techProgressInterval = null;

    async function learnTechnology() {
      try {
        const newTech = props.tech;
        if (newTech.energyCost > 0) {
          startProgressBar();
          await techsService.learnTechnology(newTech);
          logger.log(`Technology: ${newTech.name} learned!`)
        }
      }
      catch (error){
        logger.error(error)
        Pop.error(error)
      }
    }

    function startProgressBar() {
      techProgressInterval = setInterval(() => {
        techProgress.value++
      }, 1000);
    }

    watch(techProgress, (newValue) => {
      if (newValue >= techThreshold.value) {
        clearInterval(techProgressInterval);
        techProgress.value = 0;
      }
    });

    return {
      learnTechnology,
      techProgress,
      techThreshold
    }
  },
  components: {
    TechButton,
    ProgressBar
  }
}
</script>

<style scoped lang="scss">
.card {
  position: relative;
  width: 90px;
  height: 100px;
  filter: drop-shadow(0 0 0.5rem #000);
  .img-container {
    width: 90px;
    height: 82px;
    .card-img-top {
      width: 90px;
      height: 82px;
      object-fit: cover;
      object-position: top;
    }
  }
  .card-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: wrap;
    flex-wrap: wrap;
    color: #fff;
    font-size: 0.75rem;
    text-shadow: 0 0 2px #bc4866;
    background: radial-gradient(
      circle at 50% 50%,
      #000000,
      #000000 50%,
      #00000000 100%);
    padding: 0.25rem;
  }
  .card-title .emphasize-title {
    color: #bc4866;
    text-shadow: 0 0 2px #ffffff80;
    -webkit-text-stroke: 0.5px #ffccd9;
  }
}
</style>