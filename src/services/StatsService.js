import { AppState } from "../state/AppState"
import { Tech } from "../models/Tech.js"
class StatsService {
  async getStats() {
    
    // const techStats = AppState.learnedTechnologies.map(tech => new Tech(tech)
    const techStats = AppState.learnedTechnologies.map(tech => {
      return {
        ...new Tech(tech),
        quantity: tech.quantity,
        
      }
    })
    return techStats
  }

  getMyTechnologies() {

  }
}

export const statsService = new StatsService()