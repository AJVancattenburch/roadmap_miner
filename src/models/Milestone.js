import { generateId } from "../utils/GenerateId.js"

export class Milestone {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.description = data.description
    this.knowledgeThreshold = data.knowledgeThreshold
    this.picture = data.picture
    this.multiplier = data.multiplier
    this.bonus = data.bonus
    this.reqSkillCount = data.reqSkillCount
  }
}