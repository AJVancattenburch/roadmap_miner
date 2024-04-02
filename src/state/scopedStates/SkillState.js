import { reactive } from 'vue';
import { Skill } from '../../models/Skill.js';
import { image } from "../../assets/index.js";

const skills = reactive([
  /** @type {import('../../models/Skill.js').Skill[]} */
    new Skill({
      id: '1',
      name: 'HTML Mastery',
      category: 'Front End',
      description: 'You have mastered HTML!',
      upgradeQuantityReq: 3,
      picture: image.html,
      multiplier: 1
    }),
    new Skill({
      id: '2',
      name: 'CSS Mastery',
      category: 'Front End',
      description: 'You have mastered CSS!',
      upgradeQuantityReq: 3,
      picture: image.css,
      multiplier: 1
    }),
    new Skill({
      id: '3',
      name: 'JavaScript Mastery',
      category: 'Front End',
      description: 'You have mastered JavaScript!',
      upgradeQuantityReq: 3,
      picture: image.javascript,
      multiplier: 1
    }),
    new Skill({
      id: '4',
      name: 'Vue Mastery',
      category: 'Front End',
      description: 'You have mastered Vue!',
      upgradeQuantityReq: 3,
      picture: image.vuejs,
      multiplier: 1
    }),
    new Skill({
      id: '5',
      name: 'React Mastery',
      category: 'Front End',
      description: 'You have mastered React!',
      upgradeQuantityReq: 3,
      picture: image.reactjs,
      multiplier: 1
    }),
    new Skill({
      id: '6',
      name: 'Angular Mastery',
      category: 'Front End',
      description: 'You have mastered Angular!',
      upgradeQuantityReq: 3,
      picture: image.angularjs,
      multiplier: 1
    }),
    new Skill({
      id: '7',
      name: 'Node/Express Mastery',
      category: 'Back End',
      description: 'You have mastered Node w/ Express!',
      upgradeQuantityReq: 3,
      picture: image.nodejs,
      multiplier: 1
    }),
    new Skill({
      id: '8',
      name: 'MongoDB Mastery',
      category: 'Back End',
      description: 'You have mastered MongoDB!',
      upgradeQuantityReq: 3,
      picture: image.mongodb,
      multiplier: 1
    }),
    new Skill({
      id: '9',
      name: 'ASP.NET Core Mastery',
      category: 'Back End',
      description: 'You have mastered ASP.NET Core!',
      upgradeQuantityReq: 3,
      picture: image.aspnet,
      multiplier: 1
    }),
    new Skill({
      id: '10',
      name: 'mySQL Mastery',
      category: 'Back End',
      description: 'You have mastered mySQL!',
      upgradeQuantityReq: 3,
      picture: image.mysql,
      multiplier: 1
    }),
    new Skill({
      id: '11',
      name: 'C# Mastery',
      category: 'Back End',
      description: 'You have mastered C#!',
      upgradeQuantityReq: 3,
      picture: image.csharp,
      multiplier: 1
    }),

    new Skill({
      id: '12',
      name: 'MEVN Stack Mastery',
      category: 'Full Stack',
      description: 'You have mastered the MEVN Stack!',
      upgradeQuantityReq: 3,
      picture: image.MEVN,
      multiplier: 1
    }),
    new Skill({
      id: '13',
      name: 'MERN Stack Mastery',
      category: 'Full Stack',
      description: 'You have mastered the MERN Stack!',
      upgradeQuantityReq: 3,
      picture: image.MERN,
      multiplier: 1
    }),
    new Skill({
      id: '14',
      name: 'MEAN Stack Mastery',
      category: 'Full Stack',
      description: 'You have mastered the MEAN Stack!',
      upgradeQuantityReq: 3,
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