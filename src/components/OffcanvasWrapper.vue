<template>
  <div :class="['offcanvas', position]" tabindex="-1" :id="`${offcanvasInstance}`" :aria-labelledby="`${offcanvasInstance}Label`">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title m-auto text-light pb-2" :id="`${offcanvasInstance}Label`">{{ offcanvasHeader }}</h5>
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
.offcanvas-header {
  background: linear-gradient(#161250 0%, #161250f0 80%, transparent);
  .offcanvas-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
  }
  .btn-close {
    font-size: 1.5rem;
    padding-bottom: 2rem;
    filter: invert(1);
  }
}
</style>