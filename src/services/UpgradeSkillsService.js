import { upgradeState } from "../state/scopedStates/UpgradeState.js";
import { logger } from "../utils/Logger.js";

class UpgradeSkillsService {

  async setUpgradesRequiredForSkill(newSkill) {
    try {
      const matchedCategories = upgradeState.upgrades.filter(upgrade => upgrade.category === newSkill.category)
      const relatedUpgrades = matchedCategories.map(upgrade => upgrade)
      newSkill.requiredUpgrades = relatedUpgrades
      newSkill.requirementCount = relatedUpgrades.length
      logger.log('Added required upgrades and count requirement to pertaining skill:', newSkill)
    } catch (error) {
      logger.error('Could not match upgrade to skill', error)
    }
  }
}

export const upgradeSkillsService = new UpgradeSkillsService()