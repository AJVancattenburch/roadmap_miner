import { generateId } from "../utils/GenerateId.js"

export class Tech {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.category = data.category
    this.picture = data.picture
    this.energyCost = data.energyCost || 0
    this.quantity = data.quantity || 0
    this.multiplier = data.multiplier
    this.proficiency = data.proficiency || 'Novice'
  }
}