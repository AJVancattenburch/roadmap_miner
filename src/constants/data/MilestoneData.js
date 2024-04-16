import { Milestone } from "../../models/Milestone.js";

const MilestoneData = [
  {
    name: 'Junior Developer',
    description: 'You are now a Junior Developer!',
    picture: 'https://placehold.it/200x200',
    primaryColor: '#8bc782',
    complimentaryColor: '#d35887',
    accentColor: '#ebebeb',
    reqSkillCount: 1,
    multiplier: 2,
    bonus: 0,
    isUnlocked: false
  },
  {
    name: 'Intermediate Developer',
    description: 'You are now an Intermediate Developer!',
    picture: 'https://placehold.it/200x200',
    primaryColor: '#ec9200',
    complimentaryColor: '#005aec',
    accentColor: '#ebebeb',
    reqSkillCount: 3,
    multiplier: 4,
    bonus: 0,
    isUnlocked: false
  },
  {
    name: 'Senior Developer',
    description: 'You are now a Senior Developer!',
    picture: 'https://placehold.it/200x200',
    primaryColor: '#ad82e6',
    complimentaryColor: '#bbe682',
    accentColor: '#ebebeb',
    reqSkillCount: 9,
    multiplier: 6,
    bonus: 0,
    isUnlocked: false
  },
  {
    name: 'Lead Developer',
    description: 'You are now a Lead Developer!',
    picture: 'https://placehold.it/200x200',
    primaryColor: '#61dafb',
    complimentaryColor: '#fb8261',
    accentColor: '#ebebeb',
    reqSkillCount: 12,
    multiplier: 8,
    bonus: 0,
    isUnlocked: false
  }
];

export const milestoneData = MilestoneData.map(milestone => new Milestone(milestone));