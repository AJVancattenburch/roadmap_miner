import { AppState } from '../state/AppState'
import { Upgrade } from '../models/Upgrade.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { upgradeState } from "../state/scopedStates/UpgradeState.js"

class GameService {


  gainKnowledge() {
    try {
      setInterval(() => {
        AppState.knowledge++
        let upgradeMultiplier = 0
        upgradeState.upgrades.forEach(upgrade => {
          upgradeMultiplier += upgrade.multiplier * upgrade.quantity
        })
        AppState.knowledge += upgradeMultiplier
        logger.log('Knowledge gained:', AppState.knowledge)
      }, 1000)
    } catch (error) {
      logger.error('Could not gain knowledge', error)
    }
  }

  async upgradeEffects() {
    let upgradeMultiplier = 0
    upgradeState.upgrades.forEach(upgrade => upgradeMultiplier += upgrade.multiplier * upgrade.quantity)
    AppState.knowledge += upgradeMultiplier
  }

  async buyUpgrade(upgradeCategory, upgradeId) {
    // Check if user has more or equal energy to the cost of the upgrade
    // If true, subtract the energy cost from the user's energy by the cost of the upgrade
    // Add the upgrade to the user's list of upgrades, increment the quantity of the upgrade by 1
    // Then call the upgradeEffects method to apply the multiplier effect of the upgrade
  }
}

export const gameService = new GameService()