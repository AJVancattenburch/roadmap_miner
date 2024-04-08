import { AppState } from '../state/AppState'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger'

class AccountService {
  async getAccount() {
    return AppState.account
  }
}

export const accountService = new AccountService()
