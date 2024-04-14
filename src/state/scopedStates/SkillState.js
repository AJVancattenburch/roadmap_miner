import { reactive } from 'vue';
import { Skill } from '../../models/Skill.js';
import { image } from '../../assets/index.js';
import { colorThemes } from "../../utils/colorThemes.js";

const skills = reactive([
  /** @type {import('../../models/Skill.js').Skill[]} */
    new Skill({
      name: 'HTML',
      category: 'Front End',
      description: 'New level of mastery reached in HTML!',
      picture: image.html,
      fillPrimary: colorThemes.html.fillPrimary,
      fillSecondary: colorThemes.html.fillSecondary,
      accent: colorThemes.html.accent,
      multiplier: 3,
      isUnlocked: false,
    }),
    new Skill({
      name: 'CSS',
      category: 'Front End',
      description: 'New level of mastery reached in CSS!',
      picture: image.css,
      fillPrimary: colorThemes.css.fillPrimary,
      fillSecondary: colorThemes.css.fillSecondary,
      accent: colorThemes.css.accent,
      multiplier: 3,
      isUnlocked: false
    }),
    new Skill({
      name: 'JavaScript',
      category: 'Front End',
      description: 'New level of mastery reached in JavaScript!',
      picture: image.javascript,
      fillPrimary: colorThemes.js.fillPrimary,
      fillSecondary: colorThemes.js.fillSecondary,
      accent: colorThemes.js.accent,
      multiplier: 3,
      isUnlocked: false
    }),
    new Skill({
      name: 'Vue',
      category: 'Front End',
      description: 'New level of mastery reached in Vue!',
      picture: image.vuejs,
      fillPrimary: colorThemes.vuejs.fillPrimary,
      fillSecondary: colorThemes.vuejs.fillSecondary,
      accent: colorThemes.vuejs.accent,
      multiplier: 3,
      isUnlocked: false
    }),
    new Skill({
      name: 'React',
      category: 'Front End',
      description: 'New level of mastery reached in React!',
      picture: image.reactjs,
      fillPrimary: colorThemes.reactjs.fillPrimary,
      fillSecondary: colorThemes.reactjs.fillSecondary,
      accent: colorThemes.reactjs.accent,
      multiplier: 3,
      isUnlocked: false
    }),
    new Skill({
      name: 'Angular',
      category: 'Front End',
      description: 'New level of mastery reached in Angular!',
      picture: image.angularjs,
      fillPrimary: colorThemes.angularjs.fillPrimary,
      fillSecondary: colorThemes.angularjs.fillSecondary,
      accent: colorThemes.angularjs.accent,
      multiplier: 3,
      isUnlocked: false
    }),
    new Skill({
      name: 'Node/Express',
      category: 'Back End',
      description: 'New level of mastery reached in Node/Express!',
      picture: image.nodejs,
      fillPrimary: colorThemes.nodejs.fillPrimary,
      fillSecondary: colorThemes.nodejs.fillSecondary,
      accent: colorThemes.nodejs.accent,
      multiplier: 3,
      isUnlocked: false
    }),
    new Skill({
      name: 'MongoDB',
      category: 'Back End',
      description: 'New level of mastery reached in MongoDB!',
      picture: image.mongodb,
      fillPrimary: colorThemes.mongodb.fillPrimary,
      fillSecondary: colorThemes.mongodb.fillSecondary,
      accent: colorThemes.mongodb.accent,
      multiplier: 3,
      isUnlocked: false
    }),
    new Skill({
      name: 'ASP.NET Core',
      category: 'Back End',
      description: 'New level of mastery reached in ASP.NET Core / C# / mySQL!',
      picture: image.aspnetcore,
      fillPrimary: colorThemes.aspnetcore.fillPrimary,
      fillSecondary: colorThemes.aspnetcore.fillSecondary,
      accent: colorThemes.aspnetcore.accent,
      multiplier: 3,
      isUnlocked: false
    }),

    new Skill({
      name: 'MEVN Stack',
      category: 'Full Stack',
      description: 'New level of mastery reached in the MEVN Stack!',
      picture: image.MEVN,
      fillPrimary: colorThemes.mevn.fillPrimary,
      fillSecondary: colorThemes.mevn.fillPrimary,
      accent: colorThemes.mevn.accent,
      multiplier: 6,
      isUnlocked: false
    }),
    new Skill({
      name: 'MERN Stack',
      category: 'Full Stack',
      description: 'New level of mastery reached in the MERN Stack!',
      picture: image.MERN,
      fillPrimary: colorThemes.mern.fillPrimary,
      fillSecondary: colorThemes.mern.fillPrimary,
      accent: colorThemes.mern.accent,
      multiplier: 6,
      isUnlocked: false
    }),
    new Skill({
      name: 'MEAN Stack',
      category: 'Full Stack',
      description: 'New level of mastery reached in the MEAN Stack!',
      picture: image.MEAN,
      fillPrimary: colorThemes.mean.fillPrimary,
      fillSecondary: colorThemes.mean.fillPrimary,
      accent: colorThemes.mean.accent,
      multiplier: 6,
      isUnlocked: false
    })
]);

export const skillState = reactive({
  /** @type {import('../../models/Skill.js).Skill[]} */
    skills: skills,

  /** @type {import('../../models/Skill.js).Skill|null} */
    activeSkill: null
});