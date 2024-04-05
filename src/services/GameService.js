import { AppState } from '../state/AppState'
import { logger } from '../utils/Logger'
import { techState } from "../state/scopedStates/TechState.js"
import { skillState } from "../state/scopedStates/SkillState.js"
import { techSkillsService } from "./TechSkillsService.js"

class GameService {

  async knowledgeClicker() {
    try {
      AppState.knowledge++

        await techSkillsService.techEffects()
        logger.log('Knowledge gained:', AppState.knowledge)
    } catch (error) {
      logger.error('Could not gain knowledge', error)
    }
  }
}

export const gameService = new GameService()