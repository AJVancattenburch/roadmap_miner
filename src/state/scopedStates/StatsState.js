import { reactive } from "vue";
import { AppState } from "../AppState.js";

export const statsState = reactive({

  knowledge: AppState.knowledge,
  energy: AppState.energy,

  /** @type {import('../models/Tech.js').Tech[]} */
  learnedTechnologies: [],
  
  /** @type {import('../models/Stats.js').Stat||null}*/
  techStat: null,

  /** @type {import('../models/Skill.js').Skill[]} */
  skillsEarned: [],

});