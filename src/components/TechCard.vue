<template>
  <div class="card d-flex flex-column justify-content-center align-items-center">
    <div class="img-container d-flex justify-content-center align-items-center bg-dark rounded-1">
      <img :src="tech.picture" :alt="`Picture of ${tech.name}`" :title="`Click button to purchase ${tech.name} for ${tech.energyCost}`" class="card-img-top img-fluid">
    </div>
    <button @click="learnTechnology(newTech)" :disabled="techProgress != 0" class="mdi mdi-lightning-bolt badge"> <span class="cost-increment">{{ tech.energyCost }}</span></button>
    <h6 class="card-title text-center pt-2"><span class="emphasize-title text-uppercase">Learn</span> {{ tech.name }}</h6>
    <div class="col-11 progress m-1 mb-2 bg-dark" style="outline: 1px ridge #000;">
      <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuemin="0" :aria-valuemax="tech.energyCost" :style="{ width: techCompletionRate }"></div>
      <span class="text-white" style="position: absolute; left: 50%; transform: translateX(-50%);">{{ techCompletionRate }}</span>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { techsService } from "../services/TechsService.js";
import { Tech } from "../models/Tech.js";
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
    const techThreshold = computed(() => props.tech.energyCost);
    const techProgress = ref(0);
    let techProgressInterval = null;

    async function learnTechnology() {
      try {
        const newTech = props.tech;
        await techsService.learnTechnology(newTech);
        logger.log(`Began learning ${newTech}`);
        if (newTech.energyCost > 0) {
          startProgressBar();
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
      techCompletionRate: computed(() => {
        const progressBarWidth = (techProgress.value / techThreshold.value) * 100
        return `${progressBarWidth}%`
      })
    }
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
  .mdi-lightning-bolt {
    color: orange;
    text-shadow: 1px 1px #000ff0;
    &.badge {
      position: absolute;
      top: -0.75rem;
      right: 50%;
      transform: translateX(50%);
      width: 70%;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.15rem;
      font-style: normal;
      background: radial-gradient(
        circle at 50% 50%,
        #80f96d,
        #20b60f 50%,
        #32a436 75%,
        #088732 100%);
      border: 2px ridge #000000;
      border-radius: 0.25rem;
      &::after {
        content: "";
        position: absolute;
        top: -2px;
        right: 50%;
        transform: translateX(50%);
        background: linear-gradient(
          45deg,
          #80f96dcc,
          #20b60fcc,
          #32a436cc,
          #088732cc,
          #80f96dcc);
        background-size: 400% 200%;
        z-index: -1;
        filter: blur(5px) drop-shadow(-4px 2px 2px #6a6a1d) drop-shadow(4px 2px 2px #6a6a1d);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowing 20s linear infinite;
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
      }
      &:active:after {
        background: transparent;
      }
      
      &:hover:before {
        opacity: 1;
      }
      @keyframes glowing {
        0% {
          background-position: 0 0;
        }
      
        50% {
          background-position: 400% 0;
        }
      
        100% {
          background-position: 0 0;
        }
      }
      
      &:not(:hover) {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
        transform: perspective(500rem) rotateX(20deg) translateZ(-10px) translate(50%, -15%);
        transition: transform 0.3s ease-in-out;
      }
    }
    .cost-increment {
      color: #000;
      font-weight: 500;
      text-shadow: none;
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