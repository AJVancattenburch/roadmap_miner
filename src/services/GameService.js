import { AppState } from '../state/AppState'
import { logger } from '../utils/Logger'

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

  async useEnergy(techEnergy, techQuantity) {
    try {
      setInterval(() => {
        AppState.energy--
        logger.log('Energy consumed:', AppState.energy)
      }, techEnergy * 50)
      logger.log('Energy consumed:', AppState.energy, 'Energy cost:', techEnergy, 'Quantity:', techQuantity)
      if (techEnergy === 0) {
        AppState.energy += 100 * techQuantity
        techEnergy += 100 * techQuantity
        logger.log('Energy replenished:', AppState.energy)
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