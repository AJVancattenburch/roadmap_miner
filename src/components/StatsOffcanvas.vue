<template>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="statsOffcanvas" aria-labelledby="statsOffcanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="statsOffcanvasLabel">Stats</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div v-for="upgrade in upgrades" :key="upgrade.id">
        <FrontEndUpgradeCard :upgrade="upgrade" />
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from "../state/AppState.js";
import { ref, computed } from "vue";
import FrontEndUpgradeCard from "../components/upgrades/FrontEndUpgradeCard.vue";

export default {
  setup() {
    const filterBy = ref('')
    return {
      filterBy,
      upgrades: computed(() => {
        if (!filterBy.value) {
          return AppState.upgradeState.upgrades
        }
        return AppState.upgradeState.upgrades.filter(u => u.category === filterBy.value)
      })
    }
  },
  components: {
    FrontEndUpgradeCard
  }
}
</script>