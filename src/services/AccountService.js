import { AppState } from '../state/AppState'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async createAccount(accountData) {
    try {
      if (!accountData.name) {
        logger.error('Account name required')
        return
      }
      window.localStorage.setItem(AppState.account.name, JSON.stringify(accountData))
      AppState.account = new Account(accountData)
      logger.log('Account created', AppState.account)
    } catch (err) {
      logger.error('Could not create account', err)
    }
  }
  async getActivePlayer() {
    try {
      const activePlayer = AppState.account
      window.localStorage.getItem(AppState.account.name, JSON.stringify(activePlayer))
    } catch (err) {
      logger.error('Could not get account information', err)
    }
  }
}

export const accountService = new AccountService()
