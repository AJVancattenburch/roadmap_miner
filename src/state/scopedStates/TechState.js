import { reactive } from 'vue';
import { technologies } from "../../constants/index.js";

export const techState = reactive({
  /** @type {import('../../models/Tech.js').Tech[]} */
    technologies: technologies,

  /** @type {import('../../models/Tech.js').Tech|null} */
    activeTech: null
});