import { generateId } from "../utils/GenerateId.js"

export class Milestone {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.description = data.description
    this.picture = data.picture
    this.primaryColor = data.primaryColor
    this.complimentaryColor = data.complimentaryColor
    this.accentColor = data.accentColor
    this.reqSkillCount = data.reqSkillCount
    this.bonus = data.bonus
    this.multiplier = data.multiplier
    this.isUnlocked = data.isUnlocked
  }
}