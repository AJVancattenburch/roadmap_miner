import { AppState } from "../state/AppState"
import { Tech } from "../models/Tech.js"
class StatsService {
  async getGameStats(currentStats) {
    AppState.stats = currentStats
    
    const stats ={
      knowledge: AppState.knowledge,
      energy: AppState.energy,
      learnedTechnologies: AppState.techState.technologies
        .filter(tech => tech.isCompleted)
        .map(techData => new Tech(techData)) // Construct Tech objects
    };
    AppState.stats.push(stats);
  }

  getMyTechnologies() {

  }
}

export const statsService = new StatsService()