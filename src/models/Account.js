import { generateId } from "../utils/GenerateId.js"

export class Account {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.knowledge = data.knowledge || 500
    this.energy = data.energy || 1000
  }
}
