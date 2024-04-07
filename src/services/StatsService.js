import { AppState } from "../AppState"
class StatsService {
  async getGameStats(currentStats) {
    const learnedTechnologies = AppState.techState.technologies.filter(tech => tech.isCompleted)
    const learnedSkills = AppState.skillState.skills.filter(skill => skill.quantity > 0)
    AppState.stats = currentStats

    const stats ={
      knowledge: AppState.knowledge,
      energy: AppState.energy,
      learnedTechnologies: learnedTechnologies,
      learnedSkills: learnedSkills
    }
    AppState.stats.push(stats)
  }

  getMyTechnologies() {

  }
}

export const statsService = new StatsService()