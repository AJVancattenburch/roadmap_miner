<template>
  <div class="col-12 d-flex">
    <div v-if="tech.quantity === 1" :title="`Proficiency Level: ${tech.proficiency}`" class="col-4 d-flex badge-container beginner d-flex flex-column justify-content-center align-items-center">
      <img :src="tech.picture" :alt="`Picture of ${tech.name}`" class="badge-img img-fluid">
      <small class="card-title green d-flex flex-column fw-bold pt-2">{{ tech.name }}<span class="proficiency">I</span></small>
    </div>
    <div v-if="tech.quantity === 2" :title="`Proficiency Level: ${tech.proficiency}`" class="col-4 d-flex badge-container intermediate d-flex flex-column justify-content-center align-items-center">
      <img :src="tech.picture" :alt="`Picture of ${tech.name}`" title="Proficiency Level: Intermediate" class="badge-img img-fluid">
      <small class="card-title yellow d-flex flex-column fw-bold pt-2">{{ tech.name }}<span class="proficiency">II</span></small>
    </div>
    <div v-if="tech.quantity === 3" :title="`Proficiency Level: ${tech.proficiency}`" class="col-4 d-flex badge-container advanced d-flex flex-column justify-content-center align-items-center">
      <img :src="tech.picture" :alt="`Picture of ${tech.name}`" :title="`Proficiency Level: ${tech.proficiency}`" class="badge-img img-fluid">
      <small class="card-title red d-flex flex-column fw-bold pt-2">{{ tech.name }}<span class="proficiency">III</span></small>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    tech: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
* {
  text-align: center;
  text-transform: uppercase;
}
.badge-container {
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 30%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  &.beginner {
    box-shadow:var(--btn-shadow-green);
  }
  &.intermediate {
    box-shadow: var(--btn-shadow-yellow);
  }
  &.advanced {
    box-shadow: var(--btn-shadow-red);
  }
  .card-title:is(.green, .yellow, .red) {
    position: absolute;
    font-size: 0.65rem;
    -webkit-text-stroke: 0.75px #000;
    &.green {
      color: var(--light-green);
    }
    &.yellow {
      color: var(--yellow);
    }
    &.red {
      color: var(--light-red);
    }
    span {
      position: relative;
      bottom: 0.25rem;
    }
  }
}
</style>