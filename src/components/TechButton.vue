<template>
  <button v-if="tech.quantity === 0" :disabled="techProgress > 0" @click="learnTechnology" class="mdi mdi-lightning-bolt green-badge"><span class="cost-increment">{{ tech.energyCost }}</span></button>
  <button v-if="tech.quantity === 1" :disabled="techProgress > 0" @click="learnTechnology" class="mdi mdi-lightning-bolt yellow-badge"><span class="cost-increment">{{ tech.energyCost }}</span></button>
  <button v-if="tech.quantity === 2" :disabled="techProgress > 0" @click="learnTechnology" class="mdi mdi-lightning-bolt red-badge"><span class="max-increment text-uppercase">{{ tech.energyCost }}</span></button>
  <button v-if="tech.quantity === 3" class="mdi mdi-lightning-bolt red-badge"><span class="max-increment text-uppercase">Maxed</span></button>
</template>

<script>
import { Tech } from "../models/Tech.js";

export default {
  props: {
    tech: {
      type: Tech,
      required: true
    },
    techProgress: {
      type: Number,
      required: true
    }
  },
  setup(props, { emit }) {

    function learnTechnology() {
      const newTech = props.tech;
      emit('learn-technology', newTech)
    }
    return {
      learnTechnology,
    }
  }
}
</script>

<style scoped lang="scss">
.mdi-lightning-bolt {
  color: orange;
  text-shadow: 1px 1px #000ff0;
  &.green-badge, &.yellow-badge, &.red-badge {
    position: absolute;
    top: -1rem;
    right: 50%;
    transform: translateX(50%);
    width: 80%;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.15rem;
    font-style: normal;
    border: 2px ridge #000000;
    border-radius: 0.25rem;
    &::after {
      content: "";
      position: absolute;
      right: 50%;
      transform: translateX(50%);
      background-size: 400% 200%;
      z-index: -1;
      filter: blur(5px);
      width: 100%;
      height: 100%;
      animation: glowing 20s linear infinite;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
    &.green-badge {
        background: radial-gradient(
          circle at 50% 50%, #80f96d, #20b60f 50%, #32a436 75%, #088732 100%);
      &::after {
        background: linear-gradient(
          45deg, #80f96dcc, #20b60fcc, #32a436cc, #088732cc, #80f96dcc);
      }
    }
    &.yellow-badge {
      background: radial-gradient(
        circle at 50% 50%, #f9f96d, #b6b60f 50%, #a4a436 75%, #787732 100%);
      &::after {
        background: linear-gradient(
          45deg, #f9f96dcc, #b6b60fcc, #a4a436cc, #787732cc, #f9f96dcc);
      }
    }
    &.red-badge {
      background: radial-gradient(
        circle at 50% 50%, #f96d6d, #b60f0f 50%, #a43636 75%, #773232 100%);
      &::after {
        background: linear-gradient(
          45deg, #f96d6dcc, #b60f0fcc, #a43636cc, #773232cc, #f96d6dcc);
      }
      &.red-badge-max {
        filter: grayscale(75%);
        &::after {
          background: transparent;
        }
      }
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
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: 500;
    text-shadow: none;
  }
  .max-increment {
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: 500;
    text-shadow: none;
  }
}
.badge:disabled {
  filter: grayscale(75%);
  cursor: not-allowed;
  &::after {
    background: transparent;
  }
  .cost-increment, .max-increment {
    color: #000000;
    filter: saturate(0.5);
    mix-blend-mode: hard-light;
  }
}
</style>