export class Skill {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.category = data.category
    this.description = data.description
    this.picture = data.picture
    this.multiplier = data.multiplier
    this.requiredUpgrades = data.requiredUpgrades || []
    this.requirementCount = data.requirementCount
  }
}

