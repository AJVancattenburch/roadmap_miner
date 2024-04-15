import { image } from '../../assets'

const TechData = [
  {
    name: 'HTML',
    category: 'Front End',
    picture: image.html,
    energyCost: 1,
    multiplier: 1,
    isCompleted: false
  },
  {
    name: 'CSS',
    category: 'Front End',
    picture: image.css,
    energyCost: 2,
    multiplier: 1,
    isCompleted: false
  },
  {
    name: 'JavaScript',
    category: 'Front End',
    picture: image.javascript,
    energyCost: 3,
    multiplier: 2,
    isCompleted: false
  },
  {
    name: 'Vue',
    category: 'Front End',
    picture: image.vuejs,
    energyCost: 8,
    multiplier: 3,
    isCompleted: false
  },
  {
    name: 'React',
    category: 'Front End',
    picture: image.reactjs,
    energyCost: 8,
    multiplier: 3,
    isCompleted: false
  },
  {
    name: 'Angular',
    category: 'Front End',
    picture: image.angularjs,
    energyCost: 8,
    multiplier: 3,
    isCompleted: false
  },
  {
    name: 'Node/Express',
    category: 'Back End',
    picture: image.nodejs,
    energyCost: 8,
    multiplier: 3,
    isCompleted: false
  },
  {
    name: 'MongoDB',
    category: 'Back End',
    picture: image.mongodb,
    energyCost: 8,
    multiplier: 3,
    isCompleted: false
  },
  {
    name: 'ASP.NET Core',
    category: 'Back End',
    picture: image.aspnetcore,
    energyCost: 10,
    multiplier: 4,
    isCompleted: false
  },
  {
    name: 'mySQL',
    category: 'Back End',
    picture: image.mysql,
    energyCost: 10,
    multiplier: 4,
    isCompleted: false
  },
  {
    name: 'C#',
    category: 'Back End',
    picture: image.csharp,
    energyCost: 10,
    multiplier: 4,
    isCompleted: false
  },
  {
    name: 'MEVN Stack',
    category: 'Full Stack',
    picture: image.MEVN,
    energyCost: 12,
    multiplier: 5,
    isCompleted: false
  },
  {
    name: 'MERN Stack',
    category: 'Full Stack',
    picture: image.MERN,
    energyCost: 12,
    multiplier: 5,
    isCompleted: false
  }, 
  {
    name: 'MEAN Stack',
    category: 'Full Stack',
    picture: image.MEAN,
    energyCost: 12,
    multiplier: 5,
    isCompleted: false
  }
];

export const techData = TechData.map(tech => {
  return {
    ...tech
  }
})