<template>
  <div :class="['offcanvas', position]" tabindex="-1" :id="`${nameOf}Offcanvas`" :aria-labelledby="`${nameOf}OffcanvasLabel`">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" :id="`${nameOf}OffcanvasLabel`">Upgrades</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <slot name="body-slot"></slot>
  </div>
</template>

<script>
import { AppState } from "../state/AppState.js";
import { ref, computed } from "vue";
import { Offcanvas } from "bootstrap";

export default {
  props: {
    position: {
      type: String,
      default: "offcanvas-start"
    },
    nameOf: {
      type: String,
      required: true
    }
  },
  setup() {
    return {
    }
  }
}
</script>