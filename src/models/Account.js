import { AppState } from "../state/AppState.js"
import { Skill } from "./Skill.js"

export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.knowledge = data.knowledge || 500
    this.energy = data.energy || 100
  }
}
