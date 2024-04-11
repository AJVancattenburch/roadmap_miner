import { AppState } from "../state/AppState.js"
import { skillState } from "../state/scopedStates/SkillState.js"
import { logger } from "../utils/Logger.js"
import { Skill } from "../models/Skill.js"
import { techState } from './../state/scopedStates/TechState';
import { statsState } from './../state/scopedStates/StatsState';
import { gameService } from "./GameService.js";

class SkillsService {

  async linkTechToSkill(newTech) {
    try {
      logger.log('Tech to skill:', newTech)
      const newSkill = skillState.skills.find(skill => skill.name === newTech.name)
      await this.autoUnlockSkillByRelatedTech(newTech, newSkill)
    } catch (error) {
      logger.error('Could not link tech to skill', error)
    }
  }

  async autoUnlockSkillByRelatedTech(newTech, newSkill) {
    try {
      const techMatch = newTech.quantity === newSkill.requirementCount
      if (techMatch) {
        await this.learnSkill(newSkill)
      }
    } catch (error) {
      logger.error('Could not match tech to skill', error)
    }    
  }

  async learnSkill(newSkill) {
    try {
      newSkill.quantity++
      logger.log('Knowledge gained:', AppState.knowledge)
      await this.skillEffects()
    } catch (error) {
      logger.error('Could not add skill', error)
    }
  }

  async skillEffects() {
    let skillMultiplier = 0
    const updatedSkill = skillState.skills.find(skill => skillMultiplier *= skill.energyCost)
    AppState.knowledge += skillMultiplier
    logger.log('Knowledge gained:', skillMultiplier)
    await this.completeSkill(updatedSkill)
  }

  async completeSkill(updatedSkill) {
    try {
      updatedSkill.isCompleted = true
      logger.log('Skill updated:', updatedSkill)
      await gameService.addSkillToStats(updatedSkill)
    } catch (error) {
      logger.error('Could not update skill', error)
    }
  }
}

export const skillsService = new SkillsService()