import { reactive } from 'vue'
import { techState } from './scopedStates/TechState.js';
import { skillState } from './scopedStates/SkillState.js';
import { milestoneState } from './scopedStates/MilestoneState.js';
// NOTE AppState is a reactive object to contain app level data

export const AppState = reactive({
  user: {},
  /** @type {import('../models/Account.js').Account} */
  account: {},
  knowledge: 500,
  knowledgeEarned: 0,
  energy: 1000,

  techState,
  skillState,
  milestoneState
})