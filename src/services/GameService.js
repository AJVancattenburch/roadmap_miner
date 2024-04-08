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
      const intervalId = setInterval(() => {
        AppState.energy--;
        logger.log('Energy consumed:', AppState.energy);
        if (AppState.energy === 0 || AppState.energy < 0) {
          clearInterval(intervalId);
        }
      }, techEnergy * 50);
      logger.log('Energy consumed:', AppState.energy, 'Energy cost:', techEnergy, 'Quantity:', techQuantity);
    } catch (error) {
      logger.error('Could not consume energy', error);
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