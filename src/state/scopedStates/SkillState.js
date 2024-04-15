import { reactive } from 'vue';
import { skills } from "../../constants/index.js";

export const skillState = reactive({
  /** @type {import('../../models/Skill.js).Skill[]} */
    skills: skills,

  /** @type {import('../../models/Skill.js).Skill|null} */
    activeSkill: null
});