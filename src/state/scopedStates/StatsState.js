import { reactive } from "vue";

export const statsState = reactive({

  clickCount: 0,
  totalClicks: 0,
  knowledge: 500,
  energy: 1000,

  /** @type {import('../models/Tech.js').Tech[]} */
  learnedTechnologies: [],

  /** @type {import('../models/Skill.js').Skill[]} */
  skillsEarned: [],

});