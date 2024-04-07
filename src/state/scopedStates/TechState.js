import { reactive } from 'vue';
import { Tech } from "../../models/Tech.js";
import { image } from "../../assets/index.js";

const technologies = reactive([
  /** @type {import('../../models/Tech.js').Tech[]} */
  new Tech({
    name: 'HTML',
    category: 'Front End',
    energyCost: 10,
    multiplier: 1,
    isCompleted: false,
    picture: image.html
  }),
  new Tech({
    name: 'CSS',
    category: 'Front End',
    energyCost: 20,
    multiplier: 1,
    isCompleted: false,
    picture: image.css
  }),
  new Tech({
    name: 'JavaScript',
    category: 'Front End',
    energyCost: 30,
    multiplier: 2,
    isCompleted: false,
    picture: image.javascript
  }),
  new Tech({
    name: 'Vue',
    category: 'Front End',
    energyCost: 80,
    multiplier: 3,
    isCompleted: false,
    picture: image.vuejs
  }),
  new Tech({
    name: 'React',
    category: 'Front End',
    energyCost: 80,
    multiplier: 3,
    isCompleted: false,
    picture: image.reactjs
  }),
  new Tech({
    name: 'Angular',
    category: 'Front End',
    energyCost: 80,
    multiplier: 3,
    isCompleted: false,
    picture: image.angularjs
  }),

  new Tech({
    name: 'Node/Express',
    category: 'Back End',
    energyCost: 80,
    multiplier: 3,
    isCompleted: false,
    picture: image.nodejs
  }),
  new Tech({
    name: 'MongoDB',
    category: 'Back End',
    energyCost: 80,
    multiplier: 3,
    isCompleted: false,
    picture: image.mongodb
  }),
  new Tech({
    name: 'ASP.NET Core',
    category: 'Back End',
    energyCost: 100,
    multiplier: 4,
    isCompleted: false,
    picture: image.aspnet
  }),
  new Tech({
    name: 'mySQL',
    category: 'Back End',
    energyCost: 100,
    multiplier: 4,
    isCompleted: false,
    picture: image.mysql
  }),
  new Tech({
    name: 'C#',
    category: 'Back End',
    energyCost: 100,
    multiplier: 4,
    isCompleted: false,
    picture: image.csharp
  }),
  new Tech({

    name: 'MERN Stack',
    category: 'Full Stack',
    energyCost: 120,
    multiplier: 5,
    isCompleted: false,
    picture: image.MERN
  }),
  new Tech({
    name: 'MEAN Stack',
    category: 'Full Stack',
    energyCost: 120,
    multiplier: 5,
    isCompleted: false,
    picture: image.MEAN
  }),
  new Tech({
    name: 'MEVN Stack',
    category: 'Full Stack',
    energyCost: 120,
    multiplier: 5,
    isCompleted: false,
    picture: image.MEVN
  })
]);

export const techState = reactive({
  /** @type {import('../../models/Tech.js').Tech[]} */
    technologies,

  /** @type {import('../../models/Tech.js').Tech|null} */
    activeTech: null
});