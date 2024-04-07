<template>
  <OffcanvasWrapper :position="'offcanvas-start'" :offcanvasInstance="'skillOffcanvas'" :offcanvasHeader="'Skill Tree'">
    <template #body-slot>
      <div class="offcanvas-body p-3">
        <h5 class="text-center">Front End Skills</h5>
        <section v-for="skill in skills" :key="skill.category">
          <SkillCard v-if="skill.category === 'Front End'" :skill="skill" class="mx-2 mb-3" />
        </section>
        <hr />
        <h5 class="text-center mt-3">Back End Skills</h5>
        <section v-for="skill in skills" :key="skill.category">
          <SkillCard v-if="skill.category === 'Back End'" :skill="skill" />
        </section>
        <hr />
        <h5 class="text-center mt-3">Full Stack Skills</h5>
        <section v-for="skill in skills" :key="skill.category">
          <SkillCard v-if="skill.category === 'Full Stack'" :skill="skill" class="mx-2" />
        </section>
      </div>
    </template>
  </OffcanvasWrapper>
</template>

<script>
import OffcanvasWrapper from '../OffcanvasWrapper.vue'
import { skillState } from "../../state/scopedStates/SkillState.js";
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