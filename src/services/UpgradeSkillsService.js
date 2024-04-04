import { upgradeState } from "../state/scopedStates/UpgradeState.js";
import { skillState } from "../state/scopedStates/SkillState.js";
import { logger } from "../utils/Logger.js";

class UpgradeSkillsService {

  async setUpgradesRequiredForSkill(newSkill) {
    try {
      const matchedCategories = upgradeState.upgrades.filter(upgrade => upgrade.category === newSkill.category)
      const relatedUpgrades = matchedCategories.map(upgrade => upgrade.name)
      newSkill.requiredUpgrades = relatedUpgrades.join(', '),
      newSkill.requirementCount = relatedUpgrades.length
      logger.log('Added skill.updateReq to skill object: ', newSkill)
    } catch (error) {
      logger.error('Could not match upgrade to skill', error)
    }
  }
}

export const upgradeSkillsService = new UpgradeSkillsService()