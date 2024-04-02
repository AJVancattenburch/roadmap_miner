export class Upgrade {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.category = data.category
    this.energyCost = data.energyCost
    this.quantity = data.quantity || 0
    this.knowledgeMultiplier = data.knowledgeMultiplier
    this.picture = data.picture
  }
}