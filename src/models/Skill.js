export class Skill {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.description = data.description
    this.upgradeQuantityReq = data.upgradeQuantityReq || 3
    this.picture = data.picture
    this.multiplier = data.multiplier
  }
}