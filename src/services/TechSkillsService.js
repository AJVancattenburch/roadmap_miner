import { AppState } from "../state/AppState.js";
import { techState } from "../state/scopedStates/TechState.js";
import { skillState } from "../state/scopedStates/SkillState.js";
import { logger } from "../utils/Logger.js";
import { gameService } from "./GameService.js";

class TechSkillsService {
  async startLearning(newTech) {
    try {
      const selectedTech = techState.technologies.find(tech => tech.id === newTech.id)
      if (selectedTech) {
        await this.processTechnology(selectedTech)
      }
      logger.log('Technology learned:', newTech)
    } catch (error) {
      logger.error('Error in TechSkillsService | learnTechnology method failed', error)
    }
  }

  async processTechnology(selectedTech) {
    selectedTech.quantity++
    let techMultiplier = 0
    techState.technologies.forEach(tech => techMultiplier += tech.multiplier * tech.quantity)
    AppState.knowledge += techMultiplier
    logger.log('New tech multiplier value:', AppState.knowledge++ * techMultiplier)

    await gameService.consumeEnergy(selectedTech.energyCost, selectedTech.quantity)
  }

  async unlockSkill(newSkill) {
    try {
      const techNameMatches = techState.technologies.find(tech => tech.name === newSkill.name)
      newSkill.requiredTech = techNameMatches
      newSkill.requirementCount = techNameMatches.length

      this.learnSkill(techNameMatches, newSkill)
      logger.log('Added required technologies and count requirement to pertaining skills:', newSkill)
    } catch (error) {
      logger.error('Could not match tech to skill', error)
    }
  }

  async learnSkill(techNameMatches, newSkill) {
    try {
      const metTechRequirements = techNameMatches.length === newSkill.requirementCount
      const hasEnoughEnergy = AppState.energy >= newSkill.energyCost
      const increasedAmount = techNameMatches.length * newSkill.multiplier
      if (metTechRequirements && hasEnoughEnergy) {
        newSkill.quantity++
        newSkill.requirementCount += increasedAmount
        AppState.knowledge += increasedAmount
        logger.log('Knowledge gained:', AppState.knowledge)
        await this.skillEffects()
        
      }
    } catch (error) {
      logger.error('Could not add skill', error)
    }
  }

  async skillEffects() {
    let skillMultiplier = 0
    skillState.skills.forEach(skill => skillMultiplier += skill.multiplier * skill.quantity)
    AppState.knowledge += skillMultiplier
  }
}

export const techSkillsService = new TechSkillsService()