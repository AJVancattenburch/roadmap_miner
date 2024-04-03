export class Skill {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.category = data.category
    this.description = data.description
    this.upgradeReq = data.upgradeReq
    this.upgradeQuantityReq = data.upgradeQuantityReq || 1
    this.picture = data.picture
    this.multiplier = data.multiplier
  }
}