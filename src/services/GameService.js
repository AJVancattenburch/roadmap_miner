import { AppState } from '../state/AppState'
import { Upgrade } from '../models/Upgrade.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class GameService {


  async setRequiredFrontEndUpgrade() {
    try {
      const frontEndUpgrade = AppState.upgradeState.upgrades.map(u => u)
      const frontEndSkill = AppState.skillState.skills.map(s => s)
      frontEndSkill.f
    } catch (error) {
      logger.error('Could not set required upgrade', error)
    }
  }

  async buyUpgrade(upgradeId) {
    try {
      const res = await api.post('/upgrades/' + upgradeId)
      AppState.upgradeState.upgrade = new Upgrade(res.data)
    } catch (error) {
      logger.error('Could not buy upgrade', error)
    }
  }
}

export const gameService = new GameService()