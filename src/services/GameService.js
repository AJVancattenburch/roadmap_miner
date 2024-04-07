import { AppState } from '../state/AppState'
import { logger } from '../utils/Logger'
import { techSkillsService } from "./TechSkillsService.js"

class GameService {
  
  async knowledgeClicker(knowledgeEarned = 0) {
    try {
      AppState.knowledge++
      knowledgeEarned = AppState.knowledge - 500
      AppState.knowledgeEarned = knowledgeEarned

      logger.log('Total Knowledge earned:', AppState.knowledgeEarned)
    } catch (error) {
      logger.error('Could not gain knowledge', error)
    }
  }

  async consumeEnergy(techEnergy, techQuantity) {
    try {
      setInterval(() => {
        AppState.energy--
      }, techEnergy * 500)
      if (techEnergy === 0) {
        AppState.energy += 100 * techQuantity
        techEnergy += 100 * techQuantity
      }
    } catch (error) {
      logger.error('Could not consume energy', error)
    }
  }

  async updateGameStats() {
    try {
      // ANCHOR - Come back here to replace the placeholder for the final implementation that will update the game statistics
      return {
        knowledge: AppState.knowledge,
        energy: AppState.energy
      
      }
    } catch (error) {
      logger.error('Could not update current stats', error)
    }
  }
}

export const gameService = new GameService()