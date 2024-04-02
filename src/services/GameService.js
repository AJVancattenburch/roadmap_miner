import { AppState } from '../state/AppState'
import { Upgrade } from '../models/Upgrade.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class GameService {
  async getUpgrades() {
    try {
      const res = await api.get('/upgrades')
      AppState.upgradeState = res.data.map(u => new Upgrade(u))
      logger.log('Upgrades', AppState.upgradeState)
    } catch (error) {
      logger.error('Could not get upgrades', error)
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