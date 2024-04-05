<template>
  <div v-if="tech.category === 'Front End'" class="card d-flex flex-column justify-content-center align-items-center">
    <div class="img-container d-flex justify-content-center align-items-center bg-dark rounded-1">
      <img :src="tech.picture" :alt="`Picture of ${tech.name}`" :title="`Click button to purchase ${tech.name} for ${tech.energyCost}`" class="card-img-top img-fluid">
    </div>
    <i @click="learnTechnology" class="mdi mdi-lightning-bolt badge"> <span class="cost-increment">{{ tech.energyCost }}</span></i>
    <h6 class="card-title text-center pt-2"><span class="emphasize-title">Learn</span> {{ tech.name }}</h6>
  </div>
</template>

<script>
import { Tech } from "../../models/Tech.js";

export default {
  props: {
    tech: {
      type: Tech,
      required: true
    }
  },
  setup() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  position: relative;
  width: 150px;
  height: 150px;
  filter: drop-shadow(0 0 0.5rem #000);
  .img-container {
    width: 150px;
    height: 120px;
    .card-img-top {
      width: 150px;
      height: 120px;
      object-fit: cover;
      object-position: center;
    }
  }
  .mdi-lightning-bolt {
    color: orange;
    text-shadow: 1px 1px #000ff0;
    &.badge {
      position: absolute;
      top: 5.25rem;
      right: 50%;
      transform: translateX(50%);
      width: 50%;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.15rem;
      font-style: normal;
      background: radial-gradient(circle at 50% 50%, #80f96d, #20b60f 50%, #32a436 75%, #088732 100%);
      border-radius: 1rem;
      z-index: 1;
      &::after {
        content: "";
        background: linear-gradient(45deg,
            #80f96dcc,
            #20b60fcc,
            #32a436cc,
            #088732cc,
            #80f96dcc);
        position: absolute;
        top: -2px;
        right: 50%;
        transform: translateX(50%);
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
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
    white-space: nowrap;
    flex-wrap: nowrap;
  }
  .card-title .emphasize-title {
    color: #52aa13;
    text-shadow: 0 0 2px #00000080;
    -webkit-text-stroke: 1px #00000080;
  }
}
</style>../../models/Tech.js