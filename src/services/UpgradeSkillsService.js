import { upgradeState } from "../state/scopedStates/UpgradeState.js";
import { skillState } from "../state/scopedStates/SkillState.js";
import { logger } from "../utils/Logger.js";

class UpgradeSkillsService {

  calculateSkillReqByUpgrade() {
    try {
      const skill = skillState.skills.map(skill => skill)
      const upgrade = upgradeState.upgrades.map(upgrade => upgrade)

      this.matchUpgradeToSkill(skill, upgrade)

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
        skill.updateQuantityReq = categoryCount[skill.category] || 0
      }
    } catch (error) {
      logger.error('Could not set skill req', error)
    }
  }

  matchUpgradeToSkill(skill, upgrade) {
    try {
      skillState.skills.forEach(skill => {
        skill.updateReq = upgradeState.upgrades.filter(upgrade => upgrade.name === skill.updateReq)
      })
      logger.log('Matched upgrade to skill', upgrade, skill)
    } catch (error) {
      logger.error('Could not match upgrade to skill', error)
    }
  }
}

export const upgradeSkillsService = new UpgradeSkillsService()