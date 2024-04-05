import { generateId } from "../utils/GenerateId.js"

export class Skill {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.category = data.category
    this.description = data.description
    this.picture = data.picture
    this.multiplier = data.multiplier
    this.requiredTech = data.requiredTech || []
    this.requirementCount = data.requirementCount
  }
}

