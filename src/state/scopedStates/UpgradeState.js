import { reactive } from 'vue';
import { Upgrade } from "../../models/Upgrade.js";
import { image } from "../../assets/index.js";

const upgrades = reactive([
  /** @type {import('../../models/Upgrade.js').Upgrade[]} */
  new Upgrade({
    id: '1',
    name: 'HTML',
    category: 'Front End',
    energyCost: 10,
    knowledgeMultiplier: 1,
    picture: image.html
  }),
  new Upgrade({
    id: '2',
    name: 'CSS',
    category: 'Front End',
    energyCost: 20,
    knowledgeMultiplier: 2,
    picture: image.css
  }),
  new Upgrade({
    id: '3',
    name: 'JavaScript',
    category: 'Front End',
    energyCost: 30,
    knowledgeMultiplier: 3,
    picture: image.javascript
  }),
  new Upgrade({
    id: '4',
    name: 'Vue',
    category: 'Front End',
    energyCost: 40,
    knowledgeMultiplier: 4,
    picture: image.vuejs
  }),
  new Upgrade({
    id: '5',
    name: 'React',
    category: 'Front End',
    energyCost: 40,
    knowledgeMultiplier: 4,
    picture: image.reactjs
  }),
  new Upgrade({
    id: '6',
    name: 'Angular',
    category: 'Front End',
    energyCost: 40,
    knowledgeMultiplier: 4,
    picture: image.angularjs
  }),

  new Upgrade({
    id: '7',
    name: 'Node',
    category: 'Back End',
    energyCost: 10,
    knowledgeMultiplier: 1,
    picture: image.nodejs
  }),
  new Upgrade({
    id: '8',
    name: 'Express',
    category: 'Back End',
    energyCost: 20,
    knowledgeMultiplier: 2,
    picture: image.expressjs
  }),
  new Upgrade({
    id: '9',
    name: 'MongoDB',
    category: 'Back End',
    energyCost: 30,
    knowledgeMultiplier: 3,
    picture: image.mongodb
  }),
  new Upgrade({
    id: '12',
    name: 'ASP.NET Core',
    category: 'Back End',
    energyCost: 60,
    knowledgeMultiplier: 6,
    picture: image.aspnet
  }),
  new Upgrade({
    id: '10',
    name: 'mySQL',
    category: 'Back End',
    energyCost: 40,
    knowledgeMultiplier: 4,
    picture: image.mysql
  }),
  new Upgrade({
    id: '11',
    name: 'C#',
    category: 'Back End',
    energyCost: 50,
    knowledgeMultiplier: 5,
    picture: image.csharp
  }),

  new Upgrade({
    id: '13',
    name: 'MERN Stack',
    category: 'Full Stack',
    energyCost: 100,
    knowledgeMultiplier: 10,
    picture: image.MERN
  }),
  new Upgrade({
    id: '14',
    name: 'MEAN Stack',
    category: 'Full Stack',
    energyCost: 100,
    knowledgeMultiplier: 10,
    picture: image.MEAN
  }),
  new Upgrade({
    id: '15',
    name: 'MEVN Stack',
    category: 'Full Stack',
    energyCost: 100,
    knowledgeMultiplier: 10,
    picture: image.MEVN
  })
]);

export const upgradeState = reactive({
  /** @type {import('../../models/Upgrade.js').Upgrade[]} */
    upgrades,

  /** @type {import('../../models/Upgrade.js').Upgrade|null} */
    activeUpgrade: null
});