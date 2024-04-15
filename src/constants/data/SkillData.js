import { image } from '../../assets';

const SkillData = [
  {
    name: 'HTML',
    category: 'Front End',
    description: 'New level of mastery reached in HTML!',
    picture: image.html,
    fillPrimary: '#e44d26',
    fillSecondary: '#f16529',
    accent: '#000',
    multiplier: 3,
    isUnlocked: false,
  },
  {
    name: 'CSS',
    category: 'Front End',
    description: 'New level of mastery reached in CSS!',
    picture: image.css,
    fillPrimary: '#264de4',
    fillSecondary: '#2965f1',
    accent: '#ebebeb',
    multiplier: 3,
    isUnlocked: false
  },
  {
    name: 'JavaScript',
    category: 'Front End',
    description: 'New level of mastery reached in JavaScript!',
    picture: image.javascript,
    fillPrimary: '#f0db4f',
    fillSecondary: '#dac74a',
    accent: '#323330',
    multiplier: 3,
    isUnlocked: false
  },
  {
    name: 'Vue',
    category: 'Front End',
    description: 'New level of mastery reached in Vue!',
    picture: image.vuejs,
    fillPrimary: '#41b883',
    fillSecondary: '#34495e',
    accent: '#ebebeb',
    multiplier: 3,
    isUnlocked: false
  },
  {
    name: 'React',
    category: 'Front End',
    description: 'New level of mastery reached in React!',
    picture: image.reactjs,
    fillPrimary: '#61dafb',
    fillSecondary: '#282c34',
    accent: '#ebebeb',
    multiplier: 3,
    isUnlocked: false
  },
  {
    name: 'Angular',
    category: 'Front End',
    description: 'New level of mastery reached in Angular!',
    picture: image.angularjs,
    fillPrimary: '#dd0031',
    fillSecondary: '#9b0702',
    accent: '#b3b3b3',
    multiplier: 3,
    isUnlocked: false
  },
  {
    name: 'Node/Express',
    category: 'Back End',
    description: 'New level of mastery reached in Node/Express!',
    picture: image.nodejs,
    fillPrimary: '#43a365',
    fillSecondary: '#68a063',
    accent: '#303030',
    multiplier: 3,
    isUnlocked: false
  },
  {
    name: 'MongoDB',
    category: 'Back End',
    description: 'New level of mastery reached in MongoDB!',
    picture: image.mongodb,
    fillPrimary: '#5eaf4d',
    fillSecondary: '#8bc782',
    accent: '#5a4036',
    multiplier: 3,
    isUnlocked: false
  },
  {
    name: 'ASP.NET Core',
    category: 'Back End',
    description: 'New level of mastery reached in ASP.NET Core / C# / mySQL!',
    picture: image.aspnetcore,
    fillPrimary: '#ad82e6',
    fillSecondary: '#ebebeb',
    accent: '#572199',
    multiplier: 3,
    isUnlocked: false
  },
  {
    name: 'MEVN Stack',
    category: 'Full Stack',
    description: 'New level of mastery reached in the MEVN Stack!',
    picture: image.MEVN,
    fillPrimary: 'linear-gradient(90deg, #52a044, #5babdd, #61bb86, #9dbe46)',
    accent: '#2a303c',
    multiplier: 6,
    isUnlocked: false
  },
  {
    name: 'MERN Stack',
    category: 'Full Stack',
    description: 'New level of mastery reached in the MERN Stack!',
    picture: image.MERN,
    fillPrimary: 'linear-gradient(90deg, #95c88f, #282c34, #7cdafb, #5eaf4d)',
    accent: '#343b40',
    multiplier: 6,
    isUnlocked: false
  },
  {
    name: 'MEAN Stack',
    category: 'Full Stack',
    description: 'New level of mastery reached in the MEAN Stack!',
    picture: image.MEAN,
    fillPrimary: 'linear-gradient(90deg, #5eaf4d, #ec9200, #d00c05, #9cbe48)',
    accent: '#ebebeb',
    multiplier: 6,
    isUnlocked: false
  }
];

export const skillData = SkillData.map(skill => {
  return {
    ...skill
  }
});