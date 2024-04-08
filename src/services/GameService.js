import { AppState } from '../state/AppState'
import { statsState } from "../state/scopedStates/StatsState.js"
import { logger } from '../utils/Logger'
import { techsService } from "./TechsService.js"

class GameService {  
  async knowledgeClicker(knowledgeEarned = 0) {
    try {
      knowledgeEarned = AppState.knowledge - 500
      AppState.knowledgeEarned = knowledgeEarned
      
      if (statsState.learnedTechnologies.length === 0) {
        AppState.knowledge++
        logger.log('Knowledge gains (no multipliers):', AppState.knowledgeEarned)
      } else {
        techsService.handleEffects()
      }

    } catch (error) {
      logger.error('Could not gain knowledge', error)
    }
  }

  async consumeEnergy(newTech) {
    let startTime = 0;
    await techsService.determineProficiency(newTech);
    const intervalId = setInterval(() => {
      startTime++;
      techsService.handleEffects(newTech);
      if (startTime == newTech.energyCost + 1) {
        clearInterval(intervalId);
        techsService.updateTechnology(newTech);
      }
    }, 1000);
    logger.log('Energy consumed:', AppState.energy, 'Energy cost:', newTech.energyCost);
  }

  async updateGameStats() {
    try {
      statsState
      logger.log('Current stats:', statsState)
    } catch (error) {
      logger.error('Could not update current stats', error)
    }
  }
}

export const gameService = new GameService()