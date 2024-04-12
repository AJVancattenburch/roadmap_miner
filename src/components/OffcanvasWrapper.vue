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
  background: linear-gradient(var(--bg-dark-purple), var(--bg-purple));
  .offcanvas-header {
    background: linear-gradient(0deg, var(--bg-dark-purple), var(--bg-plum));
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
    background: var(--bg-purple);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--scrollbar-radial-gradient);
    border-radius: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: var(--bg-dark-purple);
    border-inline: 0.15rem ridge var(--glass-plum);
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
}
</style>