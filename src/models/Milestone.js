export class Milestone {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.description = data.description
    this.knowledgeThreshold = data.knowledgeThreshold
    this.picture = data.picture
    this.multiplier = data.multiplier
    this.bonus = data.bonus
  }
}