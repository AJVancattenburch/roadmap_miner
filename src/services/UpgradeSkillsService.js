import { upgradeState } from "../state/scopedStates/UpgradeState.js";
import { skillState } from "../state/scopedStates/SkillState.js";
import { logger } from "../utils/Logger.js";

class UpgradeSkillsService {

  createCategorySkillReq() {
    try {
      const upgradeCategory = upgradeState.upgrades.filter(upgrade => upgrade.category)
      const skillCategory = skillState.skills.filter(skill => skill.category)
      if (upgradeCategory === skillCategory) {
        skillState.activeSkill.skillReq === upgradeState.activeUpgrade.name
      }
      const categoryCount = upgradeState.upgrades.reduce((categoryCount, upgrade) => {
        categoryCount[upgrade.category] = (categoryCount[upgrade.category] || 0) + 1
        return categoryCount;
      }, {});
      this.setSkillReqCount(categoryCount)
    } catch (error) {
      logger.error('Could not check if upgrade contains skill req', error)
    }
  }

  setSkillReqCount(categoryCount) {
    try {
      for (const skill of skillState.skills) {
        skill.updateReq = categoryCount[skill.category] || 0
      }
    } catch (error) {
      logger.error('Could not set skill req', error)
    }
  }
}

export const upgradeSkillsService = new UpgradeSkillsService()