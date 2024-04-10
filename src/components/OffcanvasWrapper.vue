<template>
  <div :class="['offcanvas', position]" tabindex="-1" :id="`${offcanvasInstance}`" :aria-labelledby="`${offcanvasInstance}Label`" class="offcanvas-container text-white">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title" :id="`${offcanvasInstance}Label`">{{ offcanvasHeader }}</h3>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <slot name="body-slot"></slot>
  </div>
</template>

<script>

export default {
  props: {
    position: {
      type: String,
      default: "offcanvas-start"
    },
    offcanvasInstance: {
      type: String,
      required: true
    },
    offcanvasHeader: {
      type: String
    }
  }
}
</script>
k
<style scoped lang="scss">
.offcanvas-container {
  background: linear-gradient(#161250, #3d1250);
  .offcanvas-header {
    background: linear-gradient(0deg, #161250, #501227);
    text-align: left;
    .offcanvas-title {
      font-size: 1.5rem;
      font-weight: bold;
      padding-left: 5.5rem;
    }
    .btn-close {
      font-size: 1.5rem;
      padding-bottom: 2rem;
      filter: invert(1);
    }
  }
  ::-webkit-scrollbar {
    background: #3d1250;
  }
  ::-webkit-scrollbar-thumb {
    background: radial-gradient(ellipse, #bd1b1b 20%, #501227af 70%, transparent);
    border-radius: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: #161250;
    border-inline: 0.15rem ridge #50122750;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
}
</style>