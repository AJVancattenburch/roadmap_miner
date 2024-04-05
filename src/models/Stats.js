import { generateId } from "../utils/GenerateId.js"

export class Stats {
  constructor(data) {
    this.id = data.id || generateId()
    this.clickCount = data.clickCount
    this.totalClicks = data.totalClicks
    this.knowledge = data.knowledge || 500
    this.energy = data.energy || 1000
    this.upgradesPurchased = data.upgradesPurchased
    this.skillsEarned = data.skillsEarned
  }
}