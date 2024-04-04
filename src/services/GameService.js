import { AppState } from '../state/AppState'
import { Upgrade } from '../models/Upgrade.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { upgradeState } from "../state/scopedStates/UpgradeState.js"

class GameService {


  async obtainKnowledge() {
    try {
      AppState.knowledge++
      let upgradeMultiplier = 0
      upgradeState.upgrades.forEach(upgrade => {
        upgradeMultiplier += upgrade.multiplier * upgrade.quantity
      })
      AppState.knowledge += upgradeMultiplier
    } catch (error) {
      logger.error('Could not set required upgrade', error)
    }
  }

  async knowledgeOverTime() {
    let upgradeMultiplier = 0
    upgradeState.upgrades.forEach(upgrade => upgradeMultiplier += upgrade.multiplier * upgrade.quantity)
    AppState.knowledge += upgradeMultiplier
  }

  async buyUpgrade(upgradeCategory, upgradeId) {
    
  }
}

export const gameService = new GameService()