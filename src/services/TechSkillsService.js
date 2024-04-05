import { Tech } from "../models/Tech.js";
import { AppState } from "../state/AppState.js";
import { techState } from "../state/scopedStates/TechState.js";
import { skillState } from "../state/scopedStates/SkillState.js";
import { logger } from "../utils/Logger.js";

class TechSkillsService {

  async learnTechnology(newTech) {
    // ANCHOR - You left off here 👇🏻
    if (techState.activeTech?.id != newTech.id) {
      return logger.error('Tech not found')
    }
    newTech.quantity++
    await this.techEffects()
    logger.log('Technology learned:', newTech)
  }

  async techEffects() {
    let techMultiplier = 0
    techState.technologies.forEach(tech => techMultiplier += tech.multiplier * tech.quantity)
    AppState.knowledge += techMultiplier
  }

  async setTechRequiredForSkill(newSkill) {
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
      const techCountIsEqual = techNameMatches.length === newSkill.requirementCount
      const hasEnoughEnergy = AppState.energy >= newSkill.energyCost
      const increasedBySkill = techNameMatches.length * newSkill.multiplier
      if (techCountIsEqual && hasEnoughEnergy) {
        newSkill.quantity++
        newSkill.requirementCount += increasedBySkill
        AppState.knowledge += increasedBySkill
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