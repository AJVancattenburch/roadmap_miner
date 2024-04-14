import { generateId } from "../utils/GenerateId.js"

export class Skill {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.category = data.category
    this.description = data.description
    this.picture = data.picture
    this.fillPrimary = data.fillPrimary
    this.fillSecondary = data.fillSecondary
    this.accent = data.accent
    this.multiplier = data.multiplier
    this.isUnlocked = data.isUnlocked || false
  }
}

