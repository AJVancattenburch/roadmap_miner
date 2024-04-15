import { Milestone } from "../../models/Milestone.js";

const MilestoneData = [
  {
    name: 'Junior Developer',
    description: 'You are now a Junior Developer!',
    knowledgeThreshold: 1000,
    picture: 'https://placehold.it/200x200',
    multiplier: 1,
    bonus: 0,
    reqSkillCount: 1,
    isUnlocked: false
  },
  {
    name: 'Mid-Level Developer',
    description: 'You are now a Mid-Level Developer!',
    knowledgeThreshold: 5000,
    picture: 'https://placehold.it/200x200',
    multiplier: 2,
    bonus: 0,
    reqSkillCount: 3,
    isUnlocked: false
  },
  {
    name: 'Senior Developer',
    description: 'You are now a Senior Developer!',
    knowledgeThreshold: 10000,
    picture: 'https://placehold.it/200x200',
    multiplier: 3,
    bonus: 0,
    reqSkillCount: 9,
    isUnlocked: false
  },
  {
    name: 'Lead Developer',
    description: 'You are now a Lead Developer!',
    knowledgeThreshold: 20000,
    picture: 'https://placehold.it/200x200',
    multiplier: 4,
    bonus: 0,
    reqSkillCount: 12,
    isUnlocked: false
  }
];

export const milestoneData = MilestoneData.map(milestone => new Milestone(milestone));