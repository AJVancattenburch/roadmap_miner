<template>
  <header>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './state/AppState'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: {  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}

* {
  font-family: 'Consolas', monospace;
}
</style>