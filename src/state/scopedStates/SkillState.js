import { reactive } from 'vue';
import { Skill } from "../../models/Skill.js";

export const skillState = reactive({
  /** @type {import('../../models/Skill.js').Skill[]} */
  frontEnd: [
    new Skill({
      id: '1',
      name: 'HTML Mastery',
      description: 'You have mastered HTML!',
      upgradeQuantityReq: 3,
      picture: 'https://placehold.it/200x200',
      multiplier: 1
    }),
    new Skill({
      id: '2',
      name: 'CSS Mastery',
      description: 'You have mastered CSS!',
      upgradeQuantityReq: 3,
      picture: 'https://placehold.it/200x200',
      multiplier: 1
    }),
    new Skill({
      id: '3',
      name: 'JavaScript Mastery',
      description: 'You have mastered JavaScript!',
      upgradeQuantityReq: 3,
      picture: 'https://placehold.it/200x200',
      multiplier: 1
    }),
    new Skill({
      id: '4',
      name: 'Vue Mastery',
      description: 'You have mastered Vue!',
      upgradeQuantityReq: 3,
      picture: 'https://placehold.it/200x200',
      multiplier: 1
    }),
    new Skill({
      id: '5',
      name: 'React Mastery',
      description: 'You have mastered React!',
      upgradeQuantityReq: 3,
      picture: 'https://placehold.it/200x200',
      multiplier: 1
    }),
    new Skill({
      id: '6',
      name: 'Angular Mastery',
      description: 'You have mastered Angular!',
      upgradeQuantityReq: 3,
      picture: 'https://placehold.it/200x200',
      multiplier: 1
    })
  ],
  
  /** @type {import('../../models/Skill.js').Skill[]} */
  backEnd: [
    new Skill({
      id: '7',
      name: 'Node/Express Mastery',
      description: 'You have mastered Node w/ Express!',
      upgradeQuantityReq: 3,
      picture: 'https://placehold.it/200x200',
      multiplier: 1
    }),
    new Skill({
      id: '8',
      name: 'MongoDB Mastery',
      description: 'You have mastered MongoDB!',
      upgradeQuantityReq: 3,
      picture: 'https://placehold.it/200x200',
      multiplier: 1
    }),
    new Skill({
      id: "9",
      name: "ASP.NET Core Mastery",
      description: "You have mastered ASP.NET Core!",
      upgradeQuantityReq: 3,
      picture: "https://placehold.it/200x200",
      multiplier: 1
    }),
    new Skill({
      id: '10',
      name: 'mySQL Mastery',
      description: 'You have mastered mySQL!',
      upgradeQuantityReq: 3,
      picture: 'https://placehold.it/200x200',
      multiplier: 1
    }),
    new Skill({
      id: '11',
      name: 'C# Mastery',
      description: 'You have mastered C#!',
      upgradeQuantityReq: 3,
      picture: 'https://placehold.it/200x200',
      multiplier: 1
    })
  ],
  /** @type {import('../../models/Skill.js').Skill[]} */
  fullStack: [
    new Skill({
      id: '12',
      name: 'MEVN Stack Mastery',
      description: 'You have mastered the MEVN Stack!',
      upgradeQuantityReq: 3,
      picture: 'https://placehold.it/200x200',
      multiplier: 1
    }),
    new Skill({
      id: '13',
      name: 'MERN Stack Mastery',
      description: 'You have mastered the MERN Stack!',
      upgradeQuantityReq: 3,
      picture: 'https://placehold.it/200x200',
      multiplier: 1
    }),
    new Skill({
      id: '14',
      name: 'MEAN Stack Mastery',
      description: 'You have mastered the MEAN Stack!',
      upgradeQuantityReq: 3,
      picture: 'https://placehold.it/200x200',
      multiplier: 1
    })
  ]
});