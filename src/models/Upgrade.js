export class Upgrade {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.category = data.category
    this.energyCost = data.energyCost
    this.quantity = data.quantity || 0
    this.multiplier = data.multiplier
    this.picture = data.picture
  }
}