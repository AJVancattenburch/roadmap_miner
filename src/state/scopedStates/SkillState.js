import { reactive } from 'vue';
import { techState } from "./TechState.js";
import { Skill } from '../../models/Skill.js';
import { image } from '../../assets/index.js';


const skills = reactive([
  /** @type {import('../../models/Skill.js').Skill[]} */
    new Skill({
      name: 'HTML',
      category: 'Front End',
      description: 'New level of mastery reached in HTML!',
      picture: image.html,
      multiplier: 1,
      isUnlocked: false,
    }),
    new Skill({
      name: 'CSS',
      category: 'Front End',
      description: 'New level of mastery reached in CSS!',
      picture: image.css,
      multiplier: 1,
      isUnlocked: false
    }),
    new Skill({
      name: 'JavaScript',
      category: 'Front End',
      description: 'New level of mastery reached in JavaScript!',
      picture: image.javascript,
      multiplier: 1,
      isUnlocked: false
    }),
    new Skill({
      name: 'Vue',
      category: 'Front End',
      description: 'New level of mastery reached in Vue!',
      picture: image.vuejs,
      multiplier: 1,
      isUnlocked: false
    }),
    new Skill({
      name: 'React',
      category: 'Front End',
      description: 'New level of mastery reached in React!',
      picture: image.reactjs,
      multiplier: 1,
      isUnlocked: false
    }),
    new Skill({
      name: 'Angular',
      category: 'Front End',
      description: 'New level of mastery reached in Angular!',
      picture: image.angularjs,
      multiplier: 1,
      isUnlocked: false
    }),
    new Skill({
      name: 'Node/Express',
      category: 'Back End',
      description: 'New level of mastery reached in Node/Express!',
      picture: image.mysql,
      multiplier: 1,
      isUnlocked: false
    }),
    new Skill({
      name: 'MongoDB',
      category: 'Back End',
      description: 'New level of mastery reached in MongoDB!',
      picture: image.mysql,
      multiplier: 1,
      isUnlocked: false
    }),
    new Skill({
      name: 'ASP.NET Core',
      category: 'Back End',
      description: 'New level of mastery reached in ASP.NET Core / C# / mySQL!',
      picture: image.csharp,
      multiplier: 1,
      isUnlocked: false
    }),

    new Skill({
      name: 'MEVN Stack',
      category: 'Full Stack',
      description: 'New level of mastery reached in the MEVN Stack!',
      picture: image.MEVN,
      multiplier: 1,
      isUnlocked: false
    }),
    new Skill({
      name: 'MERN Stack',
      category: 'Full Stack',
      description: 'New level of mastery reached in the MERN Stack!',
      picture: image.MERN,
      multiplier: 1,
      isUnlocked: false
    }),
    new Skill({
      name: 'MEAN Stack',
      category: 'Full Stack',
      description: 'New level of mastery reached in the MEAN Stack!',
      picture: image.MEAN,
      multiplier: 1,
      isUnlocked: false
    })
]);

export const skillState = reactive({
  /** @type {import('../../models/Skill.js).Skill[]} */
    skills,

  /** @type {import('../../models/Skill.js).Skill|null} */
    activeSkill: null
});