export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    // this.knowledge = data.knowledge || 500
    // this.energy = data.energy || 1000
    // TODO add additional properties if needed
  }
}
