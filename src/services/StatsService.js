import { AppState } from "../state/AppState"
class StatsService {
  async getGameStats(currentStats) {
    AppState.stats = currentStats
    
    const stats ={
      knowledge: AppState.knowledge,
      energy: AppState.energy,
      learnedTechnologies: AppState.techState.technologies.filter(tech => tech.isCompleted),
      learnedSkills: AppState.skillState.skills.filter(skill => skill.isUnlocked)
    }
    AppState.stats.push(stats)
  }

  getMyTechnologies() {

  }
}

export const statsService = new StatsService()