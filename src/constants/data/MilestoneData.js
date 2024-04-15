// import { reactive } from "vue";
// import { Milestone } from "../../models/Milestone.js";

// const ranks = reactive([
//   /** @type {import('../../models/Milestone.js').Milestone[]} */
//   new Milestone({
//     id: '1',
//     name: 'Junior Developer',
//     description: 'You are now a Junior Developer!',
//     knowledgeThreshold: 1000,
//     picture: 'https://placehold.it/200x200',
//     multiplier: 1,
//     bonus: 0
//   }),
//   new Milestone({
//     id: '2',
//     name: 'Mid-Level Developer',
//     description: 'You are now a Mid-Level Developer!',
//     knowledgeThreshold: 5000,
//     picture: 'https://placehold.it/200x200',
//     multiplier: 2,
//     bonus: 0
//   }),
//   new Milestone({
//     id: '3',
//     name: 'Senior Developer',
//     description: 'You are now a Senior Developer!',
//     knowledgeThreshold: 10000,
//     picture: 'https://placehold.it/200x200',
//     multiplier: 3,
//     bonus: 0
//   }),
//   new Milestone({
//     id: '4',
//     name: 'Lead Developer',
//     description: 'You are now a Lead Developer!',
//     knowledgeThreshold: 20000,
//     picture: 'https://placehold.it/200x200',
//     multiplier: 4,
//     bonus: 0
//   })
// ]);

const MilestoneData = [
  {
    id: '1',
    name: 'Junior Developer',
    description: 'You are now a Junior Developer!',
    knowledgeThreshold: 1000,
    picture: 'https://placehold.it/200x200',
    multiplier: 1,
    bonus: 0
  },
  {
    id: '2',
    name: 'Mid-Level Developer',
    description: 'You are now a Mid-Level Developer!',
    knowledgeThreshold: 5000,
    picture: 'https://placehold.it/200x200',
    multiplier: 2,
    bonus: 0
  },
  {
    id: '3',
    name: 'Senior Developer',
    description: 'You are now a Senior Developer!',
    knowledgeThreshold: 10000,
    picture: 'https://placehold.it/200x200',
    multiplier: 3,
    bonus: 0
  },
  {
    id: '4',
    name: 'Lead Developer',
    description: 'You are now a Lead Developer!',
    knowledgeThreshold: 20000,
    picture: 'https://placehold.it/200x200',
    multiplier: 4,
    bonus: 0
  }
];

export const milestoneData = MilestoneData.map(milestone => {
  return {
    ...milestone
  }
});