import { AppState } from "../state/AppState.js"
import { skillState } from "../state/scopedStates/SkillState.js"
import { logger } from "../utils/Logger.js"
import { Skill } from "../models/Skill.js"
import { gameService } from "./GameService.js";
import { mileStonesService } from './MilestonesService';
import { skills } from "../constants/index.js";
import { statsState } from "../state/scopedStates/StatsState.js";

class SkillsService {

  async autoUnlockSkill(newTech) {
    try {
      logger.log('Tech to skill:', newTech)

      const unlockedSkill = skillState.skills.find(skill => skill.name === newTech.name)
      logger.log('Skill found:', unlockedSkill)
      await this.learnSkill(unlockedSkill)
    } catch (error) {
      logger.error('Could not link tech to skill', error)
    }
  }

  async learnSkill(newSkill) {
    try {
      const learnedSkill = new Skill(newSkill)
      logger.log('Skill obtained!:', learnedSkill)
      await this.completeSkill(learnedSkill)
    } catch (error) {
      logger.error('Could not add skill', error)
    }
  }

  async completeSkill(learnedSkill) {
    let skillMultiplier = 0

    learnedSkill.isUnlocked = true
    skillMultiplier = learnedSkill.multiplier
    AppState.knowledge = Math.floor((AppState.knowledge * skillMultiplier) / 2);
    logger.log('Knowledge gained:', skillMultiplier)
    await gameService.addSkillToStats(learnedSkill)
  }

  async checkSkillCount() {
    try {
      const skillCount = statsState.skillsEarned.length
      logger.log('Skill count:', skillCount)
      await mileStonesService.checkMilestoneStatus(skillCount)
      
    } catch (error) {
      logger.error('Failed to get skills:', error)
    }
  }
}

export const skillsService = new SkillsService()