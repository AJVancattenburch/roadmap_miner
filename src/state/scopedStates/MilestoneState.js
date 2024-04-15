import { reactive } from "vue";
import { milestones } from "../../constants/index.js";

export const milestoneState = reactive({
  /** @type {import('../../models/Milestone.js').Milestone[]} */
    milestones: milestones,

  /** @type {import('../../models/Milestone.js').Milestone|null} */
    activeMilestone: null
});
