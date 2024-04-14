<template>
  <OffcanvasWrapper :position="'offcanvas-start'" :offcanvasInstance="'skillsOffcanvas'" :offcanvasHeader="'Skill Tree'">
    <template #body-slot>
      <div class="d-flex flex-column justify-content-evenly offcanvas-body p-3">
        <h5 class="text-center">Front End Skills</h5>
        <section class="scroll-box d-flex justify-content-evenly align-items-center">
          <div v-for="skill in skills" :key="skill.category" class="card-container">
            <SkillCard v-if="skill.category === 'Front End'" :skill="skill" />
          </div>
        </section>
        <div class="col-12 d-flex px-2 indicators">
          <i title="Scroll to left" class="col-6 mdi mdi-chevron-double-left text-start"></i>
          <i title="Scroll to right" class="col-6 mdi mdi-chevron-double-right text-end"></i>
        </div>
        <hr />
        <h5 class="text-center mt-3">Back End Skills</h5>
        <section class="scroll-box d-flex justify-content-evenly align-items-center">
          <div v-for="skill in skills" :key="skill.category" class="card-container">
            <SkillCard v-if="skill.category === 'Back End'" :skill="skill" />
          </div>
        </section>
        <div class="col-12 d-flex px-2 indicators">
          <i title="Scroll to left" class="col-6 mdi mdi-chevron-double-left text-start"></i>
          <i title="Scroll to right" class="col-6 mdi mdi-chevron-double-right text-end"></i>
        </div>
        <hr />
        <h5 class="text-center mt-3">Full Stack Skills</h5>
        <section class="scroll-box d-flex justify-content-evenly align-items-center">
          <div v-for="skill in skills" :key="skill.category" class="card-container">
            <SkillCard v-if="skill.category === 'Full Stack'" :skill="skill" />
          </div>
        </section>
        <div class="col-12 d-flex px-2 indicators">
          <i title="Scroll to left" class="col-6 mdi mdi-chevron-double-left text-start"></i>
          <i title="Scroll to right" class="col-6 mdi mdi-chevron-double-right text-end"></i>
        </div>
      </div>
    </template>
  </OffcanvasWrapper>
</template>

<script>
import OffcanvasWrapper from './OffcanvasWrapper.vue'
import { skillState } from "../state/scopedStates/SkillState.js";
import SkillCard from "./SkillCard.vue";
import { computed } from "vue";

export default {
  props: {
    position: {
      type: String,
    },
    offcanvasInstance: {
      type: String,
      required: true
    },
    offcanvasHeader: {
      type: String
    }
  },
  setup() {

    return {
      skills: computed(() => skillState.skills),
    }
  },
  components: {
    OffcanvasWrapper,
    SkillCard
  }
}
</script>

<style scoped lang="scss">
.offcanvas-body {
  .scroll-box {
    overflow-y: hidden;
    padding-bottom: 10rem;
    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      margin-block: 0.25rem;
      background: var(--glass-blue-linear8-gradient);
    }
  }
}
.indicators {
  color: #9a9a9a;
  cursor: pointer;
}
</style>