<template>
  <div v-if="upgrade" :key="upgrade?.id" class="card" style="width: 18rem;">
    <img :src="upgrade.picture" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ upgrade.name }}</h5>
      <p class="card-text">{{ upgrade.description }}</p>
      <p class="card-text">Cost: {{ upgrade.energyCost }}</p>
    </div>
  </div>
</template>

<script>
import { Upgrade } from "../../models/Upgrade.js";
import { AppState } from "../../state/AppState.js";

export default {
  props: {
    upgrade: {
      type: Upgrade,
      required: true
    }
  },
  setup() {

    return {
      
    }
  }
  // methods: {
  //   buyUpgrade() {
  //     console.log("Buying upgrade", this.upgrade)
  //   }
  // 
}
</script>