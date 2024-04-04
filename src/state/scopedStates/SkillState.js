import { reactive } from 'vue';
import { upgradeState } from "./UpgradeState.js";
import { Skill } from '../../models/Skill.js';
import { image } from '../../assets/index.js';


const skills = reactive([
  /** @type {import('../../models/Skill.js').Skill[]} */
    new Skill({
      id: '1',
      name: 'HTML Mastery',
      category: 'Front End',
      description: 'You have mastered HTML!',
      picture: image.html,
      multiplier: 1,
      requiredUpgrades: [],
      requirementCount: 0
    }),
    new Skill({
      id: '2',
      name: 'CSS Mastery',
      category: 'Front End',
      description: 'You have mastered CSS!',
      picture: image.css,
      multiplier: 1
    }),
    new Skill({
      id: '3',
      name: 'JavaScript Mastery',
      category: 'Front End',
      description: 'You have mastered JavaScript!',
      picture: image.javascript,
      multiplier: 1
    }),
    new Skill({
      id: '4',
      name: 'Vue Mastery',
      category: 'Front End',
      description: 'You have mastered Vue!',
      picture: image.vuejs,
      multiplier: 1
    }),
    new Skill({
      id: '5',
      name: 'React Mastery',
      category: 'Front End',
      description: 'You have mastered React!',
      picture: image.reactjs,
      multiplier: 1
    }),
    new Skill({
      id: '6',
      name: 'Angular Mastery',
      category: 'Front End',
      description: 'You have mastered Angular!',
      picture: image.angularjs,
      multiplier: 1
    }),
    new Skill({
      id: '7',
      name: 'Node/Express/MongoDB Mastery',
      category: 'Back End',
      description: 'You have mastered mySQL!',
      picture: image.mysql,
      multiplier: 1
    }),
    new Skill({
      id: '8',
      name: 'ASP.NET Core Mastery',
      category: 'Back End',
      description: 'You have mastered ASP.NET Core with C# and mySQL!',
      picture: image.csharp,
      multiplier: 1
    }),

    new Skill({
      id: '9',
      name: 'MEVN Stack Mastery',
      category: 'Full Stack',
      description: 'You have mastered the MEVN Stack!',
      picture: image.MEVN,
      multiplier: 1
    }),
    new Skill({
      id: '10',
      name: 'MERN Stack Mastery',
      category: 'Full Stack',
      description: 'You have mastered the MERN Stack!',
      picture: image.MERN,
      multiplier: 1
    }),
    new Skill({
      id: '11',
      name: 'MEAN Stack Mastery',
      category: 'Full Stack',
      description: 'You have mastered the MEAN Stack!',
      picture: image.MEAN,
      multiplier: 1
    })
]);

export const skillState = reactive({
  /** @type {import('../../models/Skill.js).Skill[]} */
    skills,

  /** @type {import('../../models/Skill.js).Skill|null} */
    activeSkill: null
});