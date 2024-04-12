<template>
  <button v-if="tech.quantity === 0" :disabled="techProgress > 0" @click="learnTechnology" class="mdi mdi-lightning-bolt green-badge"><span class="cost-increment">{{ tech.energyCost }}</span></button>
  <button v-if="tech.quantity === 1" :disabled="techProgress > 0" @click="learnTechnology" class="mdi mdi-lightning-bolt yellow-badge"><span class="cost-increment">{{ tech.energyCost }}</span></button>
  <button v-if="tech.quantity === 2" :disabled="techProgress > 0" @click="learnTechnology" class="mdi mdi-lightning-bolt red-badge"><span class="cost-increment text-uppercase">{{ tech.energyCost }}</span></button>
  <button v-if="tech.quantity === 3" class="mdi mdi-trophy red-badge"><span class="max-increment text-uppercase">Maxed</span></button>
</template>

<script>
import { computed, ref } from "vue";
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
  emits: ['learn-technology'],
  
  setup(props, { emit }) {

    function learnTechnology() {
      const newTech = props.tech;
      emit('learn-technology', newTech)
    }

    return {
      learnTechnology
    }
  }
}
</script>

<style scoped lang="scss">
.mdi {
  color: var(--color-orange);
  text-shadow: 1px 1px var(--color-blue);
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
    transition: all 0.2s ease-in-out;
    
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
      transition: opacity 1s ease-in-out;
    }
    &.green-badge {
        background: var(--green-radial-gradient);
      &::after {
        background: var(--glass-green-linear-gradient);
      }
    }
    &.yellow-badge {
      background: var(--yellow-radial-gradient);
      &::after {
        background: var(--glass-yellow-linear-gradient);
      }
    }
    &.red-badge {
      background: var(--red-radial-gradient);
      &::after {
        background: var(--glass-red-linear-gradient);
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
      box-shadow: 0 0 20px #00000099;
      transform: perspective(500rem) rotateX(20deg) translateZ(-10px) translate(50%, -15%);
      transition: transform 0.3s ease-in-out;
    }
  }
  .cost-increment {
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: 500;
    text-shadow: none;
    transition: 1s ease-in-out;
  }
  .max-increment {
    background: linear-gradient(45deg, #000, #111 85%, transparent);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 0.8rem;
    font-weight: 500;
    text-shadow: none;
    filter: saturate(0.75), brightness(1.25);
    transition: 1s ease-in-out;
  }
}
*:disabled {
  filter: grayscale(75%);
  cursor: not-allowed;
  transition: 1s ease-in-out;
  &::after {
    background: transparent;
  }
  .cost-increment, .max-increment {
    color: #000000;
    filter: saturate(0.5);
    mix-blend-mode: hard-light;
    transition: 1s ease-in-out;
  }
}
</style>