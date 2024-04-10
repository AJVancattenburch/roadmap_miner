import { AppState } from "../state/AppState"
import { Tech } from "../models/Tech.js"
class StatsService {
  async getGameStats(currentStats) {
    AppState.stats = currentStats
    
    const stats ={
      knowledge: AppState.knowledge,
      energy: AppState.energy,
      learnedTechnologies: [],
      skillsEarned: []
    }
    return stats
  }

  getMyTechnologies() {

  }
}

export const statsService = new StatsService()