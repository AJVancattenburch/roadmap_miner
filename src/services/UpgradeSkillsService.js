import { Upgrade } from "../models/Upgrade.js";
import { AppState } from "../state/AppState.js";
import { upgradeState } from "../state/scopedStates/UpgradeState.js";
import { logger } from "../utils/Logger.js";

class UpgradeSkillsService {

  async setUpgradesRequiredForSkill(newSkill) {
    try {
      const matchedCategories = upgradeState.upgrades.filter(upgrade => upgrade.category === newSkill.category)
      const relatedUpgrades = matchedCategories.map(upgrade => new Upgrade(upgrade))
      newSkill.requiredUpgrades = relatedUpgrades
      newSkill.requirementCount = relatedUpgrades.length

      this.addSkill(relatedUpgrades, newSkill)
    } catch (error) {
      logger.error('Could not match upgrade to skill', error)
    }
  }

  async addSkill(relatedUpgrades, newSkill) {
    try {
      if (relatedUpgrades.length === 0) {
        // newSkill.isUnlocked = true // NOTE - Decide on the logic you want to implement here for unlocking skills...auto unlock when all relative upgrades are learned(purchased via energy)? Or unlock once a certain knowledge level is reached that is designed to increase depending on the path the user takes in learning? 
        AppState.account.skills.push(newSkill)
        logger.log('Added required upgrades and count requirement to pertaining skills:', newSkill)
      }
    } catch (error) {
      logger.error('Could not add skill', error)
    }
  }
}

export const upgradeSkillsService = new UpgradeSkillsService()